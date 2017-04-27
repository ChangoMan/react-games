import React from 'react';

const GameDetails = (props) => (
    <div>
        <h1 className="text-center mb-5">{props.name}</h1>

        <div className="row">
            <div className="col-sm-4">
                <p className="text-center"><img className="img-fluid" src={props.gameCover} alt="" /></p>
            </div>
            <div className="col-sm-8">
                <p className="lead">{props.summary}</p>
            </div>
        </div>

        <h2 className="mt-4 mb-3">Screenshots</h2>

        <div className="row no-gutters text-center">
            <div className="col-sm-4">
                <p><img className="img-fluid" src={props.screenShots[0]} alt="" /></p>
            </div>
            <div className="col-sm-4">
                <p><img className="img-fluid" src={props.screenShots[1]} alt="" /></p>
            </div>
            <div className="col-sm-4">
                <p><img className="img-fluid" src={props.screenShots[2]} alt="" /></p>
            </div>
        </div>

        <h2 className="mt-4 mb-3">Videos</h2>

        <div className="row text-center">
            <div className="col-sm-6">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={"https://www.youtube.com/embed/" + props.videos[0] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={"https://www.youtube.com/embed/" + props.videos[1] + "?rel=0&amp;showinfo=0"} allowFullScreen ></iframe>
                </div>
            </div>
        </div>

    </div>
)

export default GameDetails;
