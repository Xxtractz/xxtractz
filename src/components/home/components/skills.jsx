import React, {Component} from 'react';
import SkillBar from 'react-skillbars';
import {
    frameworkSkills,
    frameworkSkillsColor,
    programingSkills,
    programingSkillsColor
} from "../../../constants/skillsConstants";


class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skills" className="skills ">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>

                        <div className="section-sub-title">
                            <h4>Programming</h4>
                        </div>
                        <SkillBar skills={programingSkills} height={20} colors={programingSkillsColor}/>

                        <div className="section-sub-title">
                            <h4>Framework</h4>
                        </div>

                        <SkillBar skills={frameworkSkills} height={20} colors={frameworkSkillsColor}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;