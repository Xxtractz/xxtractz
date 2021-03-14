import React, {Component} from 'react';
import Landing from "./components/landing";
import About from "./components/about";
import Skills from "./components/skills";
// import Contact from "./components/contact";

class Home extends Component {
    render() {
        return (
            <div>
                <Landing/>
                <About/>
                <Skills/>
                {/*<Contact/>*/}
            </div>
        );
    }
}

export default Home;
