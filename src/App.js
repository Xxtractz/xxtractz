import React, {Component} from "react";
import { BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import './App.scss';
import Home from "./components/home";
import Notfound from "./components/notfound/notfound";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/404" component={Notfound}/>
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
