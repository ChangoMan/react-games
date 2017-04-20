import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';

class GameDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {}
        }
    }
    componentDidMount() {

        const gameId = this.props.match.params.gameId

        gameAPI.getGamesById(gameId)

        .then((game) => {

            this.setState({
                game: game.data[0]
            });

        });
    }

    render() {
        const {game} = this.state;
        return (
            <div className="container">
                <h1 className="text-center">{game.name}</h1>
            </div>
        );
    }
}

export default GameDetails;
