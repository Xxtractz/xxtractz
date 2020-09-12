import React, {Component} from 'react';
import Typing from 'react-typing-animation';

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state={

        }
    }

    message(str){
        return(
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
                <section id={"#"} className={"landing"}>
                    <div className="wrapper">
                        <div className="border"></div>
                        <div className="main-element">
                            <div className="content">
                                <Typing>
                                    <h1>Hello <span role="img" aria-label="Happy face">🤗</span> </h1>

                                </Typing>

                                <br/>
                                <Typing>
                                    {this.message("Sorry! No Content available")}
                                </Typing>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;