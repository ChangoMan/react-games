import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';
import GamesList from './GamesList';

class GameGridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentWillMount() {
        gameAPI.getPopularGames()
        .then((games) => {

            this.setState({
                games: games.data
            });

        });
    }
    render() {

        let gamesList = this.state.games.map((game) => {
            return (
                <GamesList key={game.id} game={game} />
            );
        });

        return (
            <div className="container">
                <h1>Games Grid</h1>
                <div className="row">
                    {gamesList}
                </div>
            </div>
        );
    }
}

export default GameGridContainer;
