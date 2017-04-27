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

            game.cover.url = game.cover.url.replace("t_thumb", "t_cover_big");

            return (
                <GamesList key={game.id} game={game} />
            );
        });

        return (
            <div className="container">
                <h1 className="mb-4">Games Grid</h1>
                <div>
                    {gamesList}
                </div>
            </div>
        );
    }
}

export default GameGridContainer;
