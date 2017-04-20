import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import GameGridContainer from './components/GameGridContainer';
import GameDetailsContainer from './components/GameDetailsContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                    <Route exact path="/" component={GameGridContainer}/>
                    <Route path="/details/:gameId/:gameSlug" component={GameDetailsContainer}/>

                </div>
            </Router>
        );
    }
}

export default App;
