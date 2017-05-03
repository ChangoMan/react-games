import React, { Component } from 'react';

import gameAPI from '../utils/gameAPI';
import GameDetails from './GameDetails';

class GameDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            isLoading: false,
            screenshotModal: false,
            screenshotModalUrl: ''
        }

        this.handleToggleModal = this.handleToggleModal.bind(this);
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

    handleToggleModal(screenshot) {
        this.setState({
            screenshotModal: !this.state.screenshotModal,
            screenshotModalUrl: screenshot
        });
    }

    render() {

        let {game, isLoading, screenshotModal, screenshotModalUrl} = this.state;

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
                    <GameDetails {...game} gameCover={gameCover} screenShots={screenShots} videos={videos} screenshotModal={screenshotModal} screenshotModalUrl={screenshotModalUrl} onToggleModal={this.handleToggleModal} />
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
