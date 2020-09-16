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
                                {this.message("I'm a Developer, Drummer...")}
                            </Typing>
                        </p>
                    </div>
                </section>
                {/*<section id={"#"} className={"landing"}>*/}
                {/*    <Typing>*/}
                {/*        <h1>Hello <span role="img" aria-label="Happy face">🤗</span></h1>*/}

                {/*    </Typing>*/}

                {/*    <br/>*/}
                {/*    <Typing>*/}
                {/*        {this.message("Sorry! No Content available")}*/}
                {/*    </Typing>*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Landing;