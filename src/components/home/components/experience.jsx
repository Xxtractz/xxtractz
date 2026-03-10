import React, { Component } from 'react';
import { experiences } from '../../../constants/experienceConstants';

class Experience extends Component {
    render() {
        return (
            <section id="experience" className="experience">
                <div className="container">
                    <div className="section-title">
                        <h2>Experience</h2>
                    </div>

                    <div style={{ position: 'relative', paddingLeft: 24 }}>
                        {/* Vertical line */}
                        <div style={{
                            position: 'absolute',
                            left: 7,
                            top: 8,
                            bottom: 8,
                            width: 2,
                            background: 'linear-gradient(to bottom, #194e8f, #ba55d3)',
                            borderRadius: 2,
                        }} />

                        {experiences.map((exp, i) => (
                            <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 36, position: 'relative' }}>
                                {/* Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: -20,
                                    top: 6,
                                    width: 14,
                                    height: 14,
                                    borderRadius: '50%',
                                    background: exp.color,
                                    border: '2px solid #fff',
                                    boxShadow: `0 0 0 3px ${exp.color}33`,
                                    flexShrink: 0,
                                }} />

                                {/* Card */}
                                <div style={{
                                    background: '#fff',
                                    borderRadius: 10,
                                    boxShadow: '0 2px 12px rgba(25,78,143,0.09)',
                                    padding: '20px 24px',
                                    flex: 1,
                                    borderLeft: `3px solid ${exp.color}`,
                                }}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
                                        <div>
                                            <h5 style={{
                                                margin: 0,
                                                fontFamily: 'Raleway, sans-serif',
                                                fontWeight: 700,
                                                fontSize: '1rem',
                                                color: '#040b14',
                                            }}>
                                                {exp.title}
                                            </h5>
                                            <p style={{ margin: '2px 0 0', fontWeight: 600, fontSize: '0.88rem', color: exp.color }}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{
                                                fontSize: '0.78rem',
                                                fontWeight: 600,
                                                color: '#fff',
                                                background: exp.color,
                                                padding: '2px 10px',
                                                borderRadius: 20,
                                                display: 'inline-block',
                                                marginBottom: 4,
                                            }}>
                                                {exp.type}
                                            </span>
                                            <p style={{ margin: 0, fontSize: '0.78rem', color: '#8a9ab5' }}>{exp.period}</p>
                                            <p style={{ margin: 0, fontSize: '0.75rem', color: '#aab' }}>{exp.location}</p>
                                        </div>
                                    </div>

                                    {/* Bullets */}
                                    <ul style={{ margin: '12px 0 14px', paddingLeft: 18 }}>
                                        {exp.bullets.map((b, j) => (
                                            <li key={j} style={{ fontSize: '0.875rem', color: '#444c5c', lineHeight: 1.65, marginBottom: 4 }}>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                        {exp.tags.map((tag, k) => (
                                            <span key={k} style={{
                                                background: '#eef2fa',
                                                color: '#194e8f',
                                                fontSize: '0.73rem',
                                                fontWeight: 600,
                                                padding: '2px 10px',
                                                borderRadius: 20,
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
