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

        this.setState(() => {
            return {
                isLoading: true
            }
        });

        const gameId = this.props.match.params.gameId

        gameAPI.getGamesById(gameId)
        .then((game) => {

            this.setState(() => {
                return {
                    game: game.data[0],
                    isLoading: false
                }
            });

        });
    }

    handleToggleModal(screenshot) {
        this.setState(() => {
            return {
                screenshotModal: !this.state.screenshotModal,
                screenshotModalUrl: screenshot
            }
        });
    }

    render() {

        let {game, isLoading, screenshotModal, screenshotModalUrl} = this.state;

        let renderContent = () => {

            if (isLoading === true) {
                return <h3 className="text-center">Loading...</h3>
            } else {

                let gameMedia = {};

                gameMedia.gameCover = game.cover.url.replace("t_thumb", "t_cover_big");

                gameMedia.screenShots = game.screenshots.map((screenshot) => {
                    screenshot.url = screenshot.url.replace("t_thumb", "t_screenshot_big");
                    return screenshot.url;
                });

                gameMedia.videos = game.videos.map((video) => {
                    return video.video_id;
                });

                return (
                    <GameDetails {...game} gameMedia={gameMedia}  screenshotModal={screenshotModal} screenshotModalUrl={screenshotModalUrl} onToggleModal={this.handleToggleModal} />
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
