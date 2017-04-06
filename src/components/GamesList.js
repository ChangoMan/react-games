import React, { Component } from 'react';

class GamesList extends Component {
    render() {
        return (
            <div className="card text-center" key={this.props.game.id} style={{width: '33.3333333333%'}}>
                <div style={{margin: '20px auto 0'}}>
                    <img className="card-img-top" src={this.props.game.cover.url} alt={this.props.game.name} />
                </div>
                <div className="card-block">
                    <h4 className="card-title">{this.props.game.name}</h4>
                    <a href={this.props.game.url} className="btn btn-primary" target="blank">See Game</a>
                </div>
            </div>
        );
    }
}

export default GamesList;
