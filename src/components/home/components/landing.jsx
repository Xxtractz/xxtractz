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

                <small><span>Photo by <a href="https://unsplash.com/@emilep?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Emile Perron</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></small>
            </div>
        );
    }
}

export default Landing;