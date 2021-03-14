import React, {Component} from 'react';
import SkillBar from 'react-skillbars';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.programingSkills = [
            {
                type: "C",
                level: 45,
            },
            {
                type: "Java",
                level: 59,
            },
            {
                type: "PHP",
                level: 65,
            },
            {
                type: "TypeScript",
                level: 85,
            },
            {
                type: "JavaScript",
                level: 80,
            },
            {
                type: "Dart",
                level: 40,
            },
            {
                type: "Nodejs",
                level: 60,
            },
            {
                type: "Docker",
                level: 20,
            },
            {
                type: "SQL",
                level: 47,
            },
            {
                type: "NoSQL",
                level: 26,
            },
            {
                type: "HTML/Css",
                level: 96,
            }
        ];
        this.programingSkillsColor = {
            bar: {
                hue: 32,
                saturation: 50,
                level: {
                    minimum: 30,
                    maximum: 70
                }
            },
            title: {
                text: {
                    hue: 45,
                    saturation: {
                        minimum: 30,
                        maximum: 70
                    },
                    level: 50
                },
                background: {
                    hue: 30,
                    saturation: {
                        minimum: 30,
                        maximum: 70
                    },
                    level: {
                        minimum: 0,
                        maximum: 50
                    }
                }
            }
        };
        this.frameworkSkills = [
            {
                type: "Angular",
                level: 88,
            },
            {
                type: "React",
                level: 81,
            },
            {
                type: "VueJs",
                level: 65,
            },
            {
                type: "flutter",
                level: 52,
            },
            {
                type: "Spring",
                level: 20,
            },
            {
                type: "Springboot",
                level: 47,
            }
        ];
        this.frameworkSkillsColor = {
            bar: {
                hue: 120,
                saturation: 50,
                level: {
                    minimum: 30,
                    maximum: 70
                }
            },
            title: {
                text: {
                    hue: 50,
                    saturation: {
                        minimum: 30,
                        maximum: 70
                    },
                    level: 50
                },
                background: {
                    hue: 180,
                    saturation: {
                        minimum: 30,
                        maximum: 70
                    },
                    level: {
                        minimum: 0,
                        maximum: 50
                    }
                }
            }
        };
    }

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
                        <SkillBar skills={this.programingSkills} height={20} colors={this.programingSkillsColor}/>

                        <div className="section-sub-title">
                            <h4>Framework</h4>
                        </div>

                        <SkillBar skills={this.frameworkSkills} height={20} colors={this.frameworkSkillsColor}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;