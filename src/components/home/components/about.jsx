import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImage from '../../../assets/img/image.jpeg';
import { aboutSectionOne, aboutSectionThree, social } from '../../../constants/aboutConstants';

const quickFacts = [
    { label: 'Role',      value: 'Java Developer' },
    { label: 'Company',   value: 'FNB South Africa' },
    { label: 'Location',  value: 'South Africa · Hybrid' },
    { label: 'Education', value: 'WeThinkCode_ Alumni' },
    { label: 'Email',     value: 'musambaloyi@gmail.com', href: 'mailto:musambaloyi@gmail.com' },
];

const highlights = [
    { icon: 'code',   label: 'Software Engineer',   sub: 'Java · TypeScript · Angular · React' },
    { icon: 'server', label: 'Backend Specialist',  sub: 'Spring Boot · Microservices · REST APIs' },
    { icon: 'music',  label: 'Drummer',             sub: 'Passion outside of code' },
];

const socialIconStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#fff',
    border: '1.5px solid #d5dde8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#194e8f',
    fontSize: '1rem',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
    textDecoration: 'none',
};

function SocialIcon({ href, title, icon, brand }) {
    return (
        <a
            href={href}
            title={title}
            target={brand ? '_blank' : undefined}
            rel={brand ? 'noopener noreferrer' : undefined}
            style={socialIconStyle}
            onMouseEnter={e => {
                e.currentTarget.style.background = '#194e8f';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = '#194e8f';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#194e8f';
                e.currentTarget.style.borderColor = '#d5dde8';
            }}
        >
            <FontAwesomeIcon icon={[brand ? 'fab' : 'fas', icon]} />
        </a>
    );
}

class About extends Component {
    render() {
        return (
            <section id="about" style={{ background: '#f5f8fd', padding: '70px 0' }}>
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                    </div>

                    <div className="about-grid">

                        {/* ── Left column ── */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

                            <div style={{
                                width: 180,
                                height: 180,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid #194e8f',
                                boxShadow: '0 8px 32px rgba(25,78,143,0.18)',
                                flexShrink: 0,
                            }}>
                                <img
                                    src={profileImage}
                                    alt="Musa Baloyi"
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#040b14', margin: 0 }}>
                                    Musa Baloyi
                                </h3>
                                <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: '#ba55d3', fontWeight: 600 }}>
                                    @Xxtractz
                                </p>
                            </div>

                            {/* Social icons */}
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                                {social.map((s, i) => (
                                    <SocialIcon key={i} href={s.url} title={s.name} icon={s.name} brand />
                                ))}
                                <SocialIcon href="mailto:musambaloyi@gmail.com" title="Email" icon="envelope" />
                            </div>

                            {/* Quick facts */}
                            <div style={{ width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(25,78,143,0.07)', overflow: 'hidden' }}>
                                {quickFacts.map((fact, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '10px 16px',
                                        borderBottom: i < quickFacts.length - 1 ? '1px solid #f0f2f8' : 'none',
                                        gap: 10,
                                    }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8a9ab5', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                                            {fact.label}
                                        </span>
                                        {fact.href
                                            ? <a href={fact.href} style={{ fontSize: '0.82rem', color: '#194e8f', fontWeight: 600, textAlign: 'right' }}>{fact.value}</a>
                                            : <span style={{ fontSize: '0.82rem', color: '#333d4e', fontWeight: 500, textAlign: 'right' }}>{fact.value}</span>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Right column ── */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Bio */}
                            <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(25,78,143,0.07)', padding: '28px 32px', borderLeft: '4px solid #194e8f' }}>
                                <h4 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#194e8f', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                    Who I am
                                </h4>
                                <blockquote style={{ borderLeft: '3px solid #ba55d3', paddingLeft: 16, margin: '0 0 16px', color: '#555f72', fontStyle: 'italic', fontSize: '0.95rem' }}>
                                    I usually let people describe who I am.
                                </blockquote>
                                {aboutSectionOne.map((para, i) => (
                                    <p key={i} style={{ color: '#444c5c', lineHeight: 1.8, margin: i < aboutSectionOne.length - 1 ? '0 0 12px' : 0, fontSize: '0.95rem' }}>
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
                                {highlights.map((item, i) => (
                                    <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 16px', boxShadow: '0 2px 12px rgba(25,78,143,0.07)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eef2fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#194e8f', fontSize: '0.95rem' }}>
                                            <FontAwesomeIcon icon={['fas', item.icon]} />
                                        </div>
                                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.88rem', color: '#040b14' }}>{item.label}</p>
                                        <p style={{ margin: 0, fontSize: '0.78rem', color: '#8a9ab5', lineHeight: 1.5 }}>{item.sub}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Motto */}
                            <div style={{ background: 'linear-gradient(135deg, #194e8f 0%, #ba55d3 100%)', borderRadius: 10, padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
                                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4rem', flexShrink: 0 }} />
                                <em style={{ color: '#fff', fontSize: '1rem', fontStyle: 'italic', fontWeight: 500 }}>
                                    {aboutSectionThree}
                                </em>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
