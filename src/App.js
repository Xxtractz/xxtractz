import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/home';
import Notfound from './components/notfound/notfound';
import Layout from './components/layout/layout';

class App extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return (
            <div>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/404" component={Notfound}/>
                            <Redirect to="/404"/>
                        </Switch>
                    </Router>
                </Layout>
            </div>
        );
    }
}

export default App;
