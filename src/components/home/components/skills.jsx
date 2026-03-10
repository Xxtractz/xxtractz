import React, { Component } from 'react';
import SkillBars from './SkillBars';
import { programingSkills, frameworkSkills } from '../../../constants/skillsConstants';

class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills" className="skills">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>

                        <div className="section-sub-title">
                            <h4>Programming</h4>
                        </div>
                        <SkillBars skills={programingSkills} color="#194e8f" />

                        <div className="section-sub-title">
                            <h4>Frameworks</h4>
                        </div>
                        <SkillBars skills={frameworkSkills} color="#ba55d3" />

                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
