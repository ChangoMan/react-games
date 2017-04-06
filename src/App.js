import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import gameAPI from './utils/gameAPI';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        gameAPI.getGames('zelda')
        .then((games) => {
            this.setState({
                games: games.data
            });
        });
    }
    render() {

        let listGames = this.state.games.map((game) => {
            return (
                <div className="card" key={game.id} style={{width: '20rem'}}>
                    <div className="card-block">
                        <h4 className="card-title">{game.name}</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Link</a>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <Jumbotron>
                    {listGames}
                </Jumbotron>
            </div>
        );
    }
}

export default App;
