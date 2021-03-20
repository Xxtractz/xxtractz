import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Home from './components/home';
import Notfound from './components/notfound/notfound';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@icon/icofont/icofont.css';
import '@icon/icofont/icofont.svg';
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class App extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/404" component={Notfound}/>
                        <Redirect to="/404"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
