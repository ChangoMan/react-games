import React, { Component } from 'react';

const GameDetails = (props) => (
    <div>
        <h1 className="text-center mb-5">{props.name}</h1>

        <div className="row">
            <div className="col-sm-4">
                <p className="text-center"><img src={props.gameCover} alt="" /></p>
            </div>
            <div className="col-sm-8">
                <p className="lead">{props.summary}</p>
            </div>
        </div>
    </div>
)

export default GameDetails;
