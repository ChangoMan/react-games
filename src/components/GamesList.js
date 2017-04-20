import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class GamesList extends Component {
    render() {
        return (
            <div className="card text-center" key={this.props.game.id} style={{width: '33.3333333333%'}}>
                <div style={{margin: '20px auto 0'}}>
                    <img className="card-img-top" src={this.props.game.cover.url} alt={this.props.game.name} />
                </div>
                <div className="card-block">
                    <h4 className="card-title">{this.props.game.name}</h4>
                    <Link to={{
                        pathname: '/details/'+this.props.game.id
                    }}>See Game</Link>
                </div>
            </div>
        );
    }
}

export default GamesList;
