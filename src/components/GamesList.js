import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class GamesList extends Component {
    render() {

        const {game} = this.props;

        return (
            <div className="card text-center" key={game.id} style={{width: '33.3333333333%'}}>
                <div style={{margin: '20px auto 0'}}>
                    <Link to={{
                        pathname: '/details/'+game.id+'/'+game.slug
                    }}>
                        <img className="card-img-top" src={game.cover.url} alt={game.name} />
                    </Link>
                </div>
                <div className="card-block">
                    <h4 className="card-title">{game.name}</h4>
                    <Link className="btn btn-primary" to={{
                        pathname: '/details/'+game.id+'/'+game.slug
                    }}>
                        See Game
                    </Link>
                </div>
            </div>
        );
    }
}

export default GamesList;
