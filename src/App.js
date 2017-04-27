import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import GameGridContainer from './components/GameGridContainer';
import GameDetailsContainer from './components/GameDetailsContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <div className="container">
                        <ul className="nav nav-pills mt-4 mb-4">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>

                    <Route exact path="/" component={GameGridContainer}/>
                    <Route path="/details/:gameId/:gameSlug" component={GameDetailsContainer}/>

                </div>
            </Router>
        );
    }
}

export default App;
