import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import GameGrid from './components/GameGrid';
import GameDetails from './components/GameDetails';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/details">Details</Link></li>
                    </ul>

                    <Route exact path="/" component={GameGrid}/>
                    <Route path="/details/:gameId" component={GameDetails}/>

                </div>
            </Router>
        );
    }
}

export default App;
