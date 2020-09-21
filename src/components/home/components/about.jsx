import React, {Component} from 'react';
import profileImage from '../../../assets/img/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {

    getWebsite() {
        return (<a href={"https://www.xxtractz.co.za"}>xxtractz.co.za</a>)
    }

    getPhone() {
        return (<a href={"tel:+27736913895"}>+27 73 691 3895</a>)
    }

    getEmail() {
        return (<a href={"mailto:musambaloyi@gmail.com"}>musambaloyi@gmail.com</a>)
    }

    getNationality() {
        return 'South African';
    }

    getCity() {
        return 'Johannesburg, South Africa';
    }

    getBirthday() {
        return "02 Jan";
    }

    getGender() {
        return "Male";
    }

    getAge() {
        const today = new Date();
        const birthDate = new Date('1998-01-02');
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
    };

    list(icon, title, description) {
        return (<li>
            <i className={'pr-2'}>
                <FontAwesomeIcon icon={['fas', icon]}/>
            </i>
            <strong>{title}:</strong> {description}
        </li>);
    }

    render() {
        return (
            <div>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <p>Who am I, I am young, Goal-driven, intelligent and an enthusiastic person willing to
                                explore and learn new things. I measure my success by my failures, I believe that
                                prosperity is more than just a reward, but it is what drives a self‐motivated person
                                like me. I have a true passion, talent, and determination in everything I do or work on.

                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={profileImage} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                                <h3>Developer.</h3>
                                <p className="font-italic">
                                    <blockquote className={"text-dark-50"}>“It's difficult until you start working on it.”</blockquote>
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Birthday', this.getBirthday())}
                                            {this.list('chevron-circle-right', 'Website', this.getWebsite())}
                                            {this.list('chevron-circle-right', 'Phone', this.getPhone())}
                                            {this.list('chevron-circle-right', 'City', this.getCity())}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            {this.list('chevron-circle-right', 'Age', this.getAge())}
                                            {this.list('chevron-circle-right', 'Gender', this.getGender())}
                                            {this.list('chevron-circle-right', 'Email', this.getEmail())}
                                            {this.list('chevron-circle-right', 'Nationality', this.getNationality())}
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