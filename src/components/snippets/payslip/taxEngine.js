// ──────────────────────────────────────────────────────────────
//  SA Payslip tax engine — 2026/27 tax year (1 Mar 2026 – 28 Feb 2027)
//  Ported verbatim from the original sa-payslip-calculator.html script.
// ──────────────────────────────────────────────────────────────

function calcPAYE(ann, age) {
  const br = [
    { lim: 245100,   base: 0,      r: 0.18 },
    { lim: 383100,   base: 44118,  r: 0.26 },
    { lim: 530200,   base: 79998,  r: 0.31 },
    { lim: 695800,   base: 125599, r: 0.36 },
    { lim: 887000,   base: 185215, r: 0.39 },
    { lim: 1878600,  base: 259783, r: 0.41 },
    { lim: Infinity, base: 666339, r: 0.45 },
  ];
  const fl = [0, 245100, 383100, 530200, 695800, 887000, 1878600];
  let tax = 0;
  for (let i = 0; i < br.length; i++) {
    if (ann <= br[i].lim) { tax = br[i].base + (ann - fl[i]) * br[i].r; break; }
  }
  const reb = { under65: 17235, '65to75': 26679, over75: 29824 };
  return Math.max(0, tax - reb[age]);
}

function margRate(ann) {
  const br = [245100, 383100, 530200, 695800, 887000, 1878600, Infinity];
  const r  = [0.18, 0.26, 0.31, 0.36, 0.39, 0.41, 0.45];
  for (let i = 0; i < br.length; i++) { if (ann <= br[i]) return r[i]; }
  return 0.45;
}

function medCred(d) {
  d = parseInt(d, 10);
  if (d === 0) return 0;
  if (d === 1) return 364;
  if (d === 2) return 728;
  return 728 + (d - 2) * 246;
}

export function snapshot(gross, otPay, travel, medAllow, otherAllow, pension, medAid, otherDed, deps, age) {
  const totalGross = gross + otPay + travel + medAllow + otherAllow;
  const taxable    = (totalGross - pension) * 12;
  const annPAYE    = calcPAYE(taxable, age);
  const annMed     = medCred(deps) * 12;
  const finalPAYE  = Math.max(0, annPAYE - annMed) / 12;
  const UIF_CAP    = 17712;
  const uifEmp     = Math.min(gross, UIF_CAP) * 0.01;
  const uifEmpr    = uifEmp;
  const totalDed   = finalPAYE + uifEmp + pension + medAid + otherDed;
  const net        = totalGross - totalDed;
  return { gross, otPay, totalGross, taxable, finalPAYE, uifEmp, uifEmpr, pension, medAid, otherDed, totalDed, net, mr: margRate(taxable) };
}

// ── Formatting ──────────────────────────────────────────────────
export const fmt   = (n) => 'R ' + Math.round(n).toLocaleString('en-ZA');
export const fmtPc = (n) => n.toFixed(1) + '%';
