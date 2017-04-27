import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';
import GameDetails from './GameDetails';

class GameDetailsContainer extends Component {
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

                let screenShots = game.screenshots.map((screenshot) => {
                    screenshot.url = screenshot.url.replace("t_thumb", "t_screenshot_big");
                    return screenshot.url;
                });

                let videos = game.videos.map((video) => {
                    return video.video_id;
                });

                return (
                    <GameDetails {...game} gameCover={gameCover} screenShots={screenShots} videos={videos} />
                )
            }

        }

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                        {renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameDetailsContainer;
