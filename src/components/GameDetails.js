import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';

class GameDetails extends Component {
    render() {

        const game = this.props.match.params.game

        return (
            <div className="container">
                <h1>Game Details</h1>
                <p>{game}</p>
            </div>
        );
    }
}

export default GameDetails;
