import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { snapshot, fmt, fmtPc } from './taxEngine';
import './payslip.css';

// ── Small presentational helpers (mirror the original HTML builders) ──
const Row = ({ label, value, cls = '' }) => (
  <div className={`sr ${cls}`}><span>{label}</span><span>{value}</span></div>
);
const RowNeg = ({ label, value, cls = '' }) => (
  <div className={`sr ${cls}`}><span>{label}</span><span className="neg">{'−'}{value}</span></div>
);
const Sub = ({ label, value = '', cls = 'mu' }) => (
  <div className={`sr ${cls}`}><span className="sr-indent">{label}</span><span>{value}</span></div>
);
const Total = ({ label, value }) => (
  <div className="sr to"><span>{label}</span><span className="pos">{value}</span></div>
);
const Head = ({ children }) => <div className="slip-head">{children}</div>;
const Dv = () => <div className="dv" />;

const BONUS_LABELS = {
  performance: 'Performance bonus',
  annual: 'Annual / 13th cheque',
  signing: 'Signing-on bonus',
};

const num = (v) => parseFloat(v) || 0;

function PayslipCalculator() {
  const [form, setForm] = useState({
    empName: '',
    compName: '',
    grossSalary: '35000',
    payPeriod: 'monthly',
    age: 'under65',
    medDeps: '0',
    otHours: '0',
    otRate: '1.5',
    bonusType: 'none',
    bonusAmount: '0',
    travel: '0',
    medical: '0',
    otherAllow: '0',
    pension: '0',
    medAid: '0',
    otherDed: '0',
  });

  // Read e.target.value synchronously — React 16 pools/nullifies the
  // synthetic event before the async functional updater runs.
  const set = (key) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [key]: value }));
  };

  // ── Derived inputs ──
  const gross      = num(form.grossSalary);
  const otHours    = num(form.otHours);
  const otRate     = num(form.otRate) || 1.5;
  const otPay      = Math.round(otHours * (gross / (21.67 * 8)) * otRate);

  const bonusAmt   = num(form.bonusAmount);
  const bonusType  = form.bonusType;
  const travel     = num(form.travel);
  const medAllow   = num(form.medical);
  const otherAllow = num(form.otherAllow);
  const pension    = num(form.pension);
  const medAid     = num(form.medAid);
  const otherDed   = num(form.otherDed);
  const deps       = form.medDeps;
  const age        = form.age;
  const period     = form.payPeriod;
  const empName    = form.empName || 'Employee';
  const compName   = form.compName || 'Company';

  const pf = period === 'weekly' ? 4.333 : period === 'fortnightly' ? 2.167 : 1;
  const pl = period === 'weekly' ? 'Weekly' : period === 'fortnightly' ? 'Fortnightly' : 'Monthly';

  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const periodStr = `${months[now.getMonth()]} ${now.getFullYear()}`;

  const hasBonus   = bonusType !== 'none' && bonusAmt > 0;
  const bonusLabel = BONUS_LABELS[bonusType] || '';

  const base   = snapshot(gross, 0,     travel, medAllow, otherAllow, pension, medAid, otherDed, deps, age);
  const withOT = snapshot(gross, otPay, travel, medAllow, otherAllow, pension, medAid, otherDed, deps, age);

  const bonusPAYE = hasBonus ? bonusAmt * withOT.mr : 0;
  const payeDiff  = withOT.finalPAYE - base.finalPAYE;
  const uifDiff   = withOT.uifEmp    - base.uifEmp;
  const netDiff   = withOT.net       - base.net;
  const otEffRate = otPay > 0 ? (payeDiff / otPay * 100) : 0;

  const finalNet   = withOT.net       + (hasBonus ? bonusAmt - bonusPAYE : 0);
  const finalDed   = withOT.totalDed  + (hasBonus ? bonusPAYE : 0);
  const finalGross = withOT.totalGross + (hasBonus ? bonusAmt : 0);
  const showOT     = otPay > 0;

  // ── Slip body (single column) ──
  const slipSingle = () => (
    <>
      <div className="slip-section">
        <Head>Earnings</Head>
        <Row label="Basic salary" value={fmt(gross / pf)} />
        {otPay > 0 && <Row label={`Overtime (${form.otHours}h ×${form.otRate})`} value={fmt(otPay / pf)} cls="mu" />}
        {hasBonus && <Row label={bonusLabel} value={fmt(bonusAmt / pf)} cls="mu" />}
        {travel > 0 && <Row label="Travel allowance" value={fmt(travel / pf)} cls="mu" />}
        {medAllow > 0 && <Row label="Medical allowance" value={fmt(medAllow / pf)} cls="mu" />}
        {otherAllow > 0 && <Row label="Other allowance" value={fmt(otherAllow / pf)} cls="mu" />}
        <Row label="Gross earnings" value={fmt(finalGross / pf)} cls="bo" />
      </div>
      <Dv />
      <div className="slip-section">
        <Head>Deductions</Head>
        <RowNeg label="Income tax (PAYE)" value={fmt(withOT.finalPAYE / pf)} />
        <Sub label={`Marginal rate: ${fmtPc(withOT.mr * 100)}`} />
        {hasBonus && <RowNeg label={`PAYE on ${bonusLabel.toLowerCase()}`} value={fmt(bonusPAYE / pf)} cls="mu" />}
        <RowNeg label="UIF (employee 1%)" value={fmt(withOT.uifEmp / pf)} />
        {pension > 0 && <RowNeg label="Pension / RA" value={fmt(pension / pf)} />}
        {medAid > 0 && <RowNeg label="Medical aid" value={fmt(medAid / pf)} />}
        {otherDed > 0 && <RowNeg label="Other deductions" value={fmt(otherDed / pf)} />}
        <RowNeg label="Total deductions" value={fmt(finalDed / pf)} cls="bo" />
      </div>
      <Total label="Net pay" value={fmt(finalNet / pf)} />
    </>
  );

  // ── Slip body (one of the two side-by-side columns) ──
  const colSlip = (s, label) => (
    <div>
      <Head>{label}</Head>
      <Row label="Basic salary" value={fmt(s.gross / pf)} />
      {s.otPay > 0 && <Row label="Overtime" value={fmt(s.otPay / pf)} cls="mu" />}
      {travel > 0 && <Row label="Travel allowance" value={fmt(travel / pf)} cls="mu" />}
      {medAllow > 0 && <Row label="Medical allowance" value={fmt(medAllow / pf)} cls="mu" />}
      {otherAllow > 0 && <Row label="Other allowance" value={fmt(otherAllow / pf)} cls="mu" />}
      <Row label="Gross" value={fmt(s.totalGross / pf)} cls="bo" />
      <Dv />
      <RowNeg label="Income tax (PAYE)" value={fmt(s.finalPAYE / pf)} />
      <Sub label={`Marginal: ${fmtPc(s.mr * 100)}`} />
      <RowNeg label="UIF (1%)" value={fmt(s.uifEmp / pf)} />
      {pension > 0 && <RowNeg label="Pension / RA" value={fmt(pension / pf)} />}
      {medAid > 0 && <RowNeg label="Medical aid" value={fmt(medAid / pf)} />}
      {otherDed > 0 && <RowNeg label="Other deductions" value={fmt(otherDed / pf)} />}
      <RowNeg label="Total deductions" value={fmt(s.totalDed / pf)} cls="bo" />
      <Total label="Net pay" value={fmt(s.net / pf)} />
    </div>
  );

  const slipBody = showOT ? (
    <div className="col2">
      {colSlip(base, 'Without overtime')}
      <div className="col2-right">{colSlip(withOT, 'With overtime')}</div>
    </div>
  ) : (
    slipSingle()
  );

  return (
    <div className="payslip-page">
      <header className="site-header">
        <a className="logo" href="#top">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          SA Payslip Calculator
        </a>
        <span className="tag">2026/27 Tax Year</span>
      </header>

      <main className="page" id="top">
        <p style={{ marginBottom: '1rem' }}>
          <Link className="header-back" to="/snippets">&larr; Back to snippets</Link>
        </p>
        <h1 className="page-title">Payslip calculator</h1>
        <p className="page-sub">1 March 2026 – 28 February 2027 · SARS tax tables · PAYE, UIF, overtime &amp; bonus</p>

        <div className="layout">
          {/* LEFT: Inputs */}
          <div className="inputs-col">
            <div className="card">
              <div className="card-title">Employee details</div>
              <div className="field-row" style={{ marginBottom: '0.85rem' }}>
                <div className="field">
                  <label>Employee name</label>
                  <input type="text" value={form.empName} onChange={set('empName')} placeholder="e.g. Musa Dlamini" />
                </div>
                <div className="field">
                  <label>Company name</label>
                  <input type="text" value={form.compName} onChange={set('compName')} placeholder="e.g. Acme (Pty) Ltd" />
                </div>
              </div>
              <div className="field-row" style={{ marginBottom: '0.85rem' }}>
                <div className="field">
                  <label>Gross monthly salary (R)</label>
                  <input type="number" value={form.grossSalary} onChange={set('grossSalary')} min="0" />
                </div>
                <div className="field">
                  <label>Pay period</label>
                  <select value={form.payPeriod} onChange={set('payPeriod')}>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                  </select>
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Age group</label>
                  <select value={form.age} onChange={set('age')}>
                    <option value="under65">Under 65</option>
                    <option value="65to75">65 – 74</option>
                    <option value="over75">75 and older</option>
                  </select>
                </div>
                <div className="field">
                  <label>Medical aid dependants</label>
                  <select value={form.medDeps} onChange={set('medDeps')}>
                    <option value="0">No medical aid</option>
                    <option value="1">Main member only</option>
                    <option value="2">Member + 1 dependant</option>
                    <option value="3">Member + 2 dependants</option>
                    <option value="4">Member + 3 dependants</option>
                    <option value="5">Member + 4+ dependants</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Overtime</div>
              <div className="ot-grid">
                <div className="field">
                  <label>Hours worked</label>
                  <input type="number" value={form.otHours} onChange={set('otHours')} min="0" step="0.5" />
                </div>
                <div className="field">
                  <label>Rate</label>
                  <select value={form.otRate} onChange={set('otRate')}>
                    <option value="1.5">×1.5</option>
                    <option value="2">×2.0</option>
                    <option value="1">×1.0</option>
                  </select>
                </div>
                <div className="field">
                  <label>Overtime pay (auto)</label>
                  <input type="number" value={otPay} readOnly />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Bonus</div>
              <div className="field-row">
                <div className="field">
                  <label>Bonus type</label>
                  <select value={form.bonusType} onChange={set('bonusType')}>
                    <option value="none">No bonus this period</option>
                    <option value="performance">Performance bonus</option>
                    <option value="annual">Annual / 13th cheque</option>
                    <option value="signing">Signing-on bonus</option>
                  </select>
                </div>
                <div className="field">
                  <label>Bonus amount (R)</label>
                  <input type="number" value={form.bonusAmount} onChange={set('bonusAmount')} min="0" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Allowances</div>
              <div className="field-row3">
                <div className="field">
                  <label>Travel (R)</label>
                  <input type="number" value={form.travel} onChange={set('travel')} min="0" />
                </div>
                <div className="field">
                  <label>Medical (R)</label>
                  <input type="number" value={form.medical} onChange={set('medical')} min="0" />
                </div>
                <div className="field">
                  <label>Other (R)</label>
                  <input type="number" value={form.otherAllow} onChange={set('otherAllow')} min="0" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Deductions</div>
              <div className="field-row3">
                <div className="field">
                  <label>Pension / RA (R)</label>
                  <input type="number" value={form.pension} onChange={set('pension')} min="0" />
                </div>
                <div className="field">
                  <label>Medical aid (R)</label>
                  <input type="number" value={form.medAid} onChange={set('medAid')} min="0" />
                </div>
                <div className="field">
                  <label>Other (R)</label>
                  <input type="number" value={form.otherDed} onChange={set('otherDed')} min="0" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Output */}
          <div className="output-col">
            {/* Metrics */}
            <div className="metrics">
              <div className="metric">
                <div className="metric-label">Gross earnings</div>
                <div className="metric-value">{fmt(finalGross / pf)}</div>
              </div>
              <div className="metric">
                <div className="metric-label">Net take-home</div>
                <div className="metric-value green">{fmt(finalNet / pf)}</div>
              </div>
              <div className="metric">
                <div className="metric-label">Income tax (PAYE)</div>
                <div className="metric-value red">{fmt((withOT.finalPAYE + (hasBonus ? bonusPAYE : 0)) / pf)}</div>
              </div>
              <div className="metric">
                <div className="metric-label">UIF (employee)</div>
                <div className="metric-value blue">{fmt(withOT.uifEmp / pf)}</div>
              </div>
            </div>

            {/* Main slip */}
            <div className="card">
              <div className="slip-header">
                <div>
                  <div className="slip-company">{compName}</div>
                  <div className="slip-employee">{empName}</div>
                </div>
                <div className="slip-meta">
                  <div>{pl} · {periodStr}</div>
                  <div style={{ marginTop: '5px' }}>
                    <span className="tag">2026/27</span>
                    {hasBonus && <span className="tag green" style={{ marginLeft: '4px' }}>{bonusLabel}</span>}
                  </div>
                </div>
              </div>
              {slipBody}
              <Dv />
              <div className="foot-grid">
                <div>
                  <Head>Employer contributions</Head>
                  <Row label="UIF (employer 1%)" value={fmt(withOT.uifEmpr / pf)} cls="mu" />
                  <Row label="Cost to company" value={fmt((finalGross + withOT.uifEmpr) / pf)} cls="mu" />
                </div>
                <div>
                  <Head>Annual estimates</Head>
                  <Row label="Annual gross" value={fmt(withOT.totalGross * 12)} cls="mu" />
                  <Row label="Annual PAYE" value={fmt(withOT.finalPAYE * 12)} cls="mu" />
                </div>
              </div>
            </div>

            {/* Overtime impact */}
            {showOT && (
              <div className="card">
                <div className="card-title">Overtime tax impact</div>
                <div className="impact-row">
                  <span>Overtime earned</span>
                  <span style={{ fontWeight: 600 }}>{fmt(otPay / pf)}</span>
                </div>
                <div className="impact-row">
                  <span style={{ color: 'var(--muted)' }}>Additional income tax (PAYE)</span>
                  <div className="right">
                    <span className="neg">{'−'}{fmt(payeDiff / pf)}</span>
                    <span className="pill up">+{fmt(payeDiff / pf)} PAYE</span>
                  </div>
                </div>
                <div className="impact-row">
                  <span style={{ color: 'var(--muted)' }}>Additional UIF</span>
                  <div className="right">
                    <span className={uifDiff > 0 ? 'neg' : ''}>{'−'}{fmt(Math.abs(uifDiff) / pf)}</span>
                    <span className={`pill ${uifDiff > 0 ? 'up' : 'neu'}`}>{uifDiff > 0 ? '+' + fmt(uifDiff / pf) : 'capped'} UIF</span>
                  </div>
                </div>
                <div className="impact-row" style={{ borderTop: '1px solid var(--border-strong)', marginTop: '4px', paddingTop: '10px', fontWeight: 600 }}>
                  <span>Extra take-home</span>
                  <div className="right">
                    <span className="pos">+{fmt(netDiff / pf)}</span>
                    <span className="pill down">of {fmt(otPay / pf)} earned</span>
                  </div>
                </div>
                <div className="summary-box">
                  Effective tax on overtime: <strong style={{ color: 'var(--red)' }}>{fmtPc(otEffRate)}</strong>
                  &nbsp;·&nbsp;
                  You keep <strong style={{ color: 'var(--green)' }}>{fmtPc(100 - otEffRate)}</strong> of every overtime rand
                </div>
              </div>
            )}

            {/* Bonus impact */}
            {hasBonus && (
              <div className="card">
                <div className="card-title">Bonus tax impact · {bonusLabel}</div>
                <div className="impact-row">
                  <span>Bonus amount</span>
                  <span style={{ fontWeight: 600 }}>{fmt(bonusAmt / pf)}</span>
                </div>
                <div className="impact-row">
                  <span style={{ color: 'var(--muted)' }}>PAYE withheld at {fmtPc(withOT.mr * 100)} marginal rate</span>
                  <div className="right">
                    <span className="neg">{'−'}{fmt(bonusPAYE / pf)}</span>
                    <span className="pill up">{'−'}{fmt(bonusPAYE / pf)} PAYE</span>
                  </div>
                </div>
                <div className="impact-row">
                  <span style={{ color: 'var(--muted)' }}>UIF on bonus</span>
                  <div className="right">
                    <span style={{ color: 'var(--muted)' }}>R 0</span>
                    <span className="pill neu">not applicable</span>
                  </div>
                </div>
                <div className="impact-row" style={{ borderTop: '1px solid var(--border-strong)', marginTop: '4px', paddingTop: '10px', fontWeight: 600 }}>
                  <span>Bonus take-home</span>
                  <div className="right">
                    <span className="pos">+{fmt((bonusAmt - bonusPAYE) / pf)}</span>
                    <span className="pill down">of {fmt(bonusAmt / pf)} earned</span>
                  </div>
                </div>
                <div className="summary-box">
                  Effective tax on bonus: <strong style={{ color: 'var(--red)' }}>{fmtPc(withOT.mr * 100)}</strong>
                  &nbsp;·&nbsp;
                  You keep <strong style={{ color: 'var(--green)' }}>{fmtPc(100 - withOT.mr * 100)}</strong> of your bonus
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="note">
          Figures use the 2026/27 SARS income tax brackets (1 March 2026 – 28 February 2027). Tax rebates carried
          forward from 2025/26 pending official 2026/27 confirmation (primary R17 235 · secondary R9 444 · tertiary
          R3 145). Medical aid tax credits: R364/month for main member, R364 for first dependant, R246 per additional
          dependant. Pension/RA contributions reduce taxable income up to the greater of 27.5% of remuneration or
          R350 000 per annum. Overtime hourly rate based on 21.67 working days × 8 hours per month. Bonus PAYE withheld
          at the employee's marginal rate — all bonus types are fully taxable as gross income under SARS rules. UIF is
          not levied on bonuses and is capped at a monthly earnings ceiling of R17 712. This calculator is for
          estimation purposes only and does not constitute tax advice. Consult a registered tax practitioner for your
          specific situation.
        </p>
      </main>
    </div>
  );
}

export default PayslipCalculator;
