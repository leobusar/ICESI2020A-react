import React, { Component } from 'react';
import './App.css';
import GameList from './components/Game/GameList';
import GameForm from './components/Game/GameForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gameEdit: { id: "", name: "", type: "", price: "" },
      owner: "Leo",
      games: [
        { id: 1, name: "Super Mario Bross", type: "Arcade", price: "30000" },
        { id: 2, name: "Call on Duty", type: "FPS", price: "200000" },
        { id: 3, name: "Celeste", type: "Plataformero", price: "45000" },
      ]
    }
  }

  handleOnEdit(game) {
    //console.log(game)
    this.setState({
      gameEdit: game
    })

  }

  handleAddGame(game) {
    let games = this.state.games;
    if (this.state.gameEdit.id === "") {
      //game.id = Math.floor(Math.random() * 100)
      games.push(game);

    } else {
      let index = games.findIndex((gameItem) => gameItem.id === game.id);
      console.log(index);
      games[index] = game;
    }

    this.setState({
      games,
      gameEdit: { id: "", name: "", type: "", price: "" }
    })

  }

  render() {
    return (
      <div className="container">
        <GameList owner={this.state.owner} games={this.state.games} onEdit={this.handleOnEdit.bind(this)} />
        <GameForm onSubmit={this.handleAddGame.bind(this)} game={this.state.gameEdit} />
      </div>
    );
  }
}

export default App;
