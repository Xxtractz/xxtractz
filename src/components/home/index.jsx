import React, {Component} from 'react';
import Landing from "./components/landing";
import About from "./components/about";
import Social from "./components/social";
import Contact from "./components/contact";

class Home extends Component {
    render() {
        return (
            <div>
                <Landing/>
                {/*<About/>*/}
                {/*<Social/>*/}
                {/*<Contact/>*/}
            </div>
        );
    }
}

export default Home;