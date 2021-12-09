import React, {Component} from 'react';
import Landing from "./components/landing";
import About from "./components/about";
import Experience from "./components/experience";
import Layout from "../layout/layout";

class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Landing/>
                    <About/>
                    <Experience/>
                </Layout>
            </div>
        );
    }
}

export default Home;
