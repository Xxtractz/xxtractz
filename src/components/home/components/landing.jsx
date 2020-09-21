import React, {Component} from 'react';
import Typing from 'react-typing-animation';

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    message(str) {
        return (
            <div>
                {str}
                <br/>
                <br/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container text-center" data-aos="fade-in">
                        <h1>Musa Baloyi | Xxtractz</h1>
                        <p>
                            <Typing>
                                {this.message("Developer, Drummer, Entrepreneur...")}
                            </Typing>
                        </p>
                    </div>
                </section>

            </div>
        );
    }
}

export default Landing;