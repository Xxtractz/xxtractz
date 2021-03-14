import React, {Component} from 'react';
import profileImage from '../../../assets/img/image.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personal: {
                name: "Musa Martin Baloyi",
                email: {
                    label: "musambaloyi@gmail.com",
                    url: "mailto:musambaloyi@gmail.com"
                },
                website: {
                    label: "xxtractz.co.za",
                    url: "https://www.xxtractz.co.za"
                },
                tel: {
                    label: "+27 73 691 3895",
                    url: "tel:+27736913895"
                },
                dateOfBirth: "1998 Jan 02",
                nationality: "South African",
                location: "Johannesburg South, Gauteng, South Africa",
            }
        }

    }

    get About() {
        return ("I see myself as a self motivated entrepreneur, a smiley face, hard-working, crazy, abnormal, risk taker and " +
            "considerate person. I believe in learning, because that is the root of Experience " +
            "“There is nothing that is more helpful in life than listening to those who are experienced”, " +
            "I measure my success by failure. I’m not a fan of theory.\n");
    }

    list(icon, title, description, linkUrl, linkLabel) {
        return (<li>
            <i className={'pr-2'}>
                <FontAwesomeIcon icon={['fas', icon]}/>
            </i>
            <strong>{title}:</strong> {description}
            <a href={linkUrl}>{linkLabel}</a>
        </li>);
    }

    render() {
        const personalDetails = this.state.personal;
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <blockquote className={"text-dark-50"}>
                                Who am I? I usually let people describe who I am.
                            </blockquote>
                            <p>{this.About}
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={profileImage} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                                <h3>Details_</h3>
                                <p className="font-italic">
                                    <blockquote className={"text-dark-50"}>“My personal information”
                                    </blockquote>
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Full Name', personalDetails.name)}
                                            {this.list('chevron-circle-right', 'Website', "", personalDetails.website.url, personalDetails.website.label)}
                                            {this.list('chevron-circle-right', 'Tel', "", personalDetails.tel.url, personalDetails.tel.label)}
                                            {this.list('chevron-circle-right', 'Location', personalDetails.location)}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Date of Birth', personalDetails.dateOfBirth)}
                                            {this.list('chevron-circle-right', 'Gender', "Male")}
                                            {this.list('chevron-circle-right', 'Email', "", personalDetails.email.url, personalDetails.email.label)}
                                            {this.list('chevron-circle-right', 'Nationality', personalDetails.nationality)}
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    <br/>
                                    <br/>
                                    <h3>Interest_</h3>
                                    <p className="font-italic">
                                        <blockquote className={"text-dark-50"}>“we all have life outside of work”
                                        </blockquote>
                                    </p>
                                    I am a <strong>Drummer_</strong> - I am such a huge fan of music, I am that guy who
                                    can just out of the blue start dancing to a good old blues song. I listen to almost
                                    all Genres types.

                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default About;