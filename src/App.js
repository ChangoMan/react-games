import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import gameAPI from './utils/gameAPI';
import GamesList from './components/GamesList';

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

        let gamesList = this.state.games.map((game) => {
            return (
                <GamesList key={game.id} game={game} />
            );
        });

        return (
            <div className="container">
                <Jumbotron>
                    <div className="row">
                        {gamesList}
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
