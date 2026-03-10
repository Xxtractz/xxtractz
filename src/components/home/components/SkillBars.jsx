import React, { Component } from 'react';

const MAX_STARS = 5;

function levelToStars(level) {
    // Convert 0-100 level to 1-5 stars
    return Math.round((level / 100) * MAX_STARS);
}

function Stars({ filled, color }) {
    return (
        <div style={{ display: 'flex', gap: 4 }}>
            {Array.from({ length: MAX_STARS }).map((_, i) => (
                <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i < filled ? color : 'none'}
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

class SkillBars extends Component {
    render() {
        const { skills, color } = this.props;

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '14px 24px',
                marginBottom: 12,
            }}>
                {skills.map((skill, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#fff',
                        borderRadius: 8,
                        padding: '10px 14px',
                        boxShadow: '0 1px 6px rgba(25,78,143,0.07)',
                    }}>
                        <span style={{ fontWeight: 600, fontSize: '0.88rem', color: '#272829' }}>
                            {skill.type}
                        </span>
                        <Stars filled={levelToStars(skill.level)} color={color} />
                    </div>
                ))}
            </div>
        );
    }
}

export default SkillBars;
