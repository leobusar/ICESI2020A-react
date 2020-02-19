import React, { Component } from 'react';
import GameList from './GameList';
import GameForm from './GameForm';
import firebase from '../../config/firebase'

class Games extends Component {

  constructor() {
    super();
    this.state = {
      gameEdit: { id: "", name: "", type: "", price: "" },
      owner: "Leo",
      games: [
        // { id: 1, name: "Super Mario Bross", type: "Arcade", price: "30000" },
        // { id: 2, name: "Call on Duty", type: "FPS", price: "200000" },
        // { id: 3, name: "Celeste", type: "Plataformero", price: "45000" },
      ],
      db: firebase.firestore()
    }
  }
  componentDidMount(){
    this.refresh();
  }

  refresh() {
    let games = [];
    this.state.db.collection("games").get().then((querySnapshot) =>
     { querySnapshot.forEach(doc =>
        // console.log(doc.data())
        games.push(doc.data())
      );
      this.setState(
        { 
          games,
          gameEdit: { id: "", name: "", type: "", price: "" }
         }
      )
     }
    )
  //  console.log(games);

  }

  handleOnEdit(game) {
    //console.log(game)
    // this.setState({
    //   gameEdit: game
    // })
    this.state.db.collection("games").doc(game.id).edit(game);      
    this.refresh();  
  }

  handleAddGame(game) {
    // let games = this.state.games;
    // if (this.state.gameEdit.id === "") {
    //   //game.id = Math.floor(Math.random() * 100)
    //   //    games.push(game);


    // } else {
    //   let index = games.findIndex((gameItem) => gameItem.id === game.id);
    //   //console.log(index);
    //   games[index] = game;
    // }

    // this.setState({
    //   games,
    //   gameEdit: { id: "", name: "", type: "", price: "" }
    // })
    this.state.db.collection("games").doc(game.id).set(game);      
    this.refresh();


  }

  render() {
    return (
      <div>
        <GameList owner={this.state.owner} games={this.state.games} onEdit={this.handleOnEdit.bind(this)} />
        <GameForm onSubmit={this.handleAddGame.bind(this)} game={this.state.gameEdit} />
      </div>
    );
  }
}

export default Games;
