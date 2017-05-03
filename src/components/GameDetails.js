import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class GameDetails extends Component {
    /*toggleModal() {
        this.props.onToggleModal;
    }*/
    render() {
        return (
            <div>
                <h1 className="text-center mb-5">{this.props.name}</h1>

                <div className="row">
                    <div className="col-sm-4">
                        <p className="text-center"><img className="img-fluid" src={this.props.gameCover} alt="" /></p>
                    </div>
                    <div className="col-sm-8">
                        <p className="lead">{this.props.summary}</p>
                    </div>
                </div>

                <h2 className="mt-4 mb-3">Screenshots</h2>

                <div className="row no-gutters text-center">
                    <div className="col-sm-4">
                        <p><a onClick={this.props.onToggleModal.bind(null, this.props.screenShots[0])}><img className="img-fluid" src={this.props.screenShots[0]} alt="" /></a></p>
                    </div>
                    <div className="col-sm-4">
                        <p><a onClick={this.props.onToggleModal.bind(null, this.props.screenShots[1])}><img className="img-fluid" src={this.props.screenShots[1]} alt="" /></a></p>
                    </div>
                    <div className="col-sm-4">
                        <p><a onClick={this.props.onToggleModal.bind(null, this.props.screenShots[2])}><img className="img-fluid" src={this.props.screenShots[2]} alt="" /></a></p>
                    </div>
                </div>

                <h2 className="mt-4 mb-3">Videos</h2>

                <div className="row text-center">
                    <div className="col-sm-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src={"https://www.youtube.com/embed/" + this.props.videos[0] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src={"https://www.youtube.com/embed/" + this.props.videos[1] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
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
