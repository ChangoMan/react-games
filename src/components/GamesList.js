import React, { Component } from 'react';
import moment from 'moment';
import { Progress } from 'reactstrap'

import { Link } from 'react-router-dom'

class GamesList extends Component {
    render() {

        const {game} = this.props;

        const releaseDate = moment(game.first_release_date).format('MMMM DD, YYYY');

        const rating = Math.round(game.rating);

        const mediaStyles = {
            border: '1px solid #ddd',
            padding: '20px',
            marginBottom: '20px'
        }

        return (
            <div>
                <div className="media" key={game.id} style={mediaStyles}>
                    <Link to={{
                        pathname: '/details/'+game.id+'/'+game.slug
                    }}>
                        <img className="d-flex mr-4" src={game.cover.url} alt={game.name} />
                    </Link>
                    <div className="media-body">
                        <h3 className="mt-0">{game.name}</h3>
                        <hr />
                        <p className="mb-1">{releaseDate}</p>
                        <div className="mb-4">
                            <Progress color="warning" value={rating}>Rating: {rating}</Progress>
                        </div>
                        <Link className="btn btn-primary" to={{
                            pathname: '/details/'+game.id+'/'+game.slug
                        }}>
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamesList;
