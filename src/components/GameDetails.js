import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';

class GameDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            isLoading: false
        }
    }
    componentWillMount() {

        this.setState({
            isLoading: true
        });

        const gameId = this.props.match.params.gameId

        gameAPI.getGamesById(gameId)
        .then((game) => {

            this.setState({
                game: game.data[0],
                isLoading: false
            });

        });
    }

    render() {

        let {game, isLoading} = this.state;

        let renderContent = () => {

            if (isLoading === true) {
                return <h3 className="text-center">Loading...</h3>
            } else {

                let gameCover = game.cover.url.replace("t_thumb", "t_cover_big");

                return (
                    <div>
                        <h1 className="text-center mb-5">{game.name}</h1>

                        <div className="row">
                            <div className="col-sm-4">
                                <p className="text-center"><img src={gameCover} alt="" /></p>
                            </div>
                            <div className="col-sm-8">
                                <p className="lead">{game.summary}</p>
                            </div>
                        </div>
                    </div>
                )
            }

        }

        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        {renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameDetails;
