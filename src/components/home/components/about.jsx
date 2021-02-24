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
        return ("Who am I? I usually let people describe who I am.\n\n" +
            " explore and learn new things. I measure my success by my failures, I believe that\n" +
            " prosperity is more than just a reward, but it is what drives a self‐motivated person\n" +
            " like me. I have a true passion, talent, and determination in everything I do or work on.\n");
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
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <p>{this.About}
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={profileImage} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                                <h3>Details.</h3>
                                <p className="font-italic">
                                    <blockquote className={"text-dark-50"}>“My personal information”
                                    </blockquote>
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Full Name', this.state.personal.name)}
                                            {this.list('chevron-circle-right', 'Website', "", this.state.personal.website.url, this.state.personal.website.label)}
                                            {this.list('chevron-circle-right', 'Tel', "", this.state.personal.tel.url, this.state.personal.tel.label)}
                                            {this.list('chevron-circle-right', 'Location', this.state.personal.location)}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Date of Birth', this.state.personal.dateOfBirth)}
                                            {this.list('chevron-circle-right', 'Gender', "Male")}
                                            {this.list('chevron-circle-right', 'Email', "", this.state.personal.email.url, this.state.personal.email.label)}
                                            {this.list('chevron-circle-right', 'Nationality', this.state.personal.nationality)}
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    I have a desire to be the best at all times.
                                    I don't give up my dreams, because of my financial woes or obstacles,
                                    this, however, makes me to be more determined to succeed.

                                    <br/>

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