import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

let ScreenShots = (props) => {
    return (
        <div className="row no-gutters text-center">
            {props.screenShots.map(function(screenshot) {
                return (
                    <div key={screenshot} className="col-sm-4">
                        <a style={{cursor: 'pointer'}} onClick={props.onToggleModal.bind(null, screenshot)}><img className="img-fluid" src={screenshot} alt="" /></a>
                    </div>
                )
            })}
        </div>
    )
}

class GameDetails extends Component {
    /*toggleModal() {
        console.log(this)
        this.props.onToggleModal;
    }*/
    render() {
        return (
            <div>
                <h1 className="text-center mb-5">{this.props.name}</h1>

                <div className="row">
                    <div className="col-sm-4">
                        <p className="text-center"><img className="img-fluid" src={this.props.gameMedia.gameCover} alt="" /></p>
                    </div>
                    <div className="col-sm-8">
                        <p className="lead">{this.props.summary}</p>
                    </div>
                </div>

                <h2 className="mt-4 mb-3">Screenshots</h2>

                <ScreenShots screenShots={this.props.gameMedia.screenShots} onToggleModal={this.props.onToggleModal} />
                {/*<div className="col-sm-4">
                    <p><a onClick={this.props.onToggleModal.bind(null, this.props.gameMedia.screenShots[0])}><img className="img-fluid" src={this.props.gameMedia.screenShots[0]} alt="" /></a></p>
                </div>
                <div className="col-sm-4">
                    <p><a onClick={this.props.onToggleModal.bind(null, this.props.gameMedia.screenShots[1])}><img className="img-fluid" src={this.props.gameMedia.screenShots[1]} alt="" /></a></p>
                </div>
                <div className="col-sm-4">
                    <p><a onClick={this.props.onToggleModal.bind(null, this.props.gameMedia.screenShots[2])}><img className="img-fluid" src={this.props.gameMedia.screenShots[2]} alt="" /></a></p>
                </div>*/}

                <h2 className="mt-4 mb-3">Videos</h2>

                <div className="row text-center">
                    <div className="col-sm-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src={"https://www.youtube.com/embed/" + this.props.gameMedia.videos[0] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src={"https://www.youtube.com/embed/" + this.props.gameMedia.videos[1] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.props.screenshotModal} toggle={this.props.onToggleModal} size="lg">
                    <ModalHeader toggle={this.props.onToggleModal}>Screenshot</ModalHeader>
                    <ModalBody>
                        <img className="img-fluid" src={this.props.screenshotModalUrl} alt="" />
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

export default GameDetails;
