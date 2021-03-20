import React, {Component} from 'react';
import profileImage from '../../../assets/img/image.jpeg';
import {aboutSectionOne, aboutSectionTwo, aboutSectionThree, social} from "../../../constants/aboutConstants";
import {AddBrandIcon, AddIcon} from "../../iconsUtil";

class About extends Component {
    render() {
        return (
            <div>
                <section id="about" className="about bg-light">
                    <div className="container">

                        <div className="section-title">
                            <h2 className="">Biography</h2>

                        </div>

                        <div className="row">
                            <div className="col-md-7 mt-5">
                                <blockquote className={"text-dark-50 mt-4"}>
                                    Who am I? I usually let people describe who I am.
                                </blockquote>
                                <p className="pb-3">{aboutSectionOne}</p>
                                <p className="pb-2">{aboutSectionTwo}</p>
                                <p className="">{aboutSectionThree}</p>
                            </div>
                            <div className="col-md-5 mr-auto" data-aos="fade-left">
                                <div className="circular--portrait mx-auto  ">
                                    <img src={profileImage} alt=""/>
                                </div>
                                <div className="text-center content">
                                    <h3 className={"pt-2"}>Musa Baloyi</h3>
                                    <h3 className="font-italic">
                                        <code className={"text-dark-50"}>Xxtractz
                                        </code>
                                    </h3>
                                    <p className="text-white-50 p-1"><a href={"https://www.wethinkcode.co.za"}>WethinkCode_
                                        Alumni</a></p>

                                    <div className="row">
                                        <div className="mx-auto">
                                            <ul>
                                                {
                                                    social.map((socialItem, key) =>
                                                        <AddBrandIcon key={key} icon={socialItem.name} url={socialItem.url}/>
                                                    )
                                                }
                                                <AddIcon icon={"envelope"} url={"mailto:musambaloyi@gmail.com"}/>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default About;