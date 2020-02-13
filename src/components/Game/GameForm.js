import React, { Component } from 'react';

export default class GameForm extends Component {
    constructor() {
        super();
        this.state ={
            name: "", 
            type: "", 
            price: "", 
            id: ""
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.game.id !== prevState.id){
          return { 
              id:  nextProps.game.id, 
              name: nextProps.game.name,
              price: nextProps.game.price,
              type: nextProps.game.type
          };
       }
       else return null;
     }
     

    addGame(event){
        event.preventDefault();
        console.log(this.state.name);
        let  id = (this.state.id === "")? Math.floor(Math.random() * 100):this.state.id;

        let game =  {
            id: id,
            name: this.state.name, 
            type: this.state.type, 
            price: this.state.price
        }
        this.props.onSubmit(game);
    
        this.setState ({
            name: "", 
            type: "", 
            price: "", 
            id: ""
        }) 


    }

    handleChange(event) {
        //console.log(event.target);
        this.setState({[event.target.id]: event.target.value});
    }

    render() {

        console.log(this.props.game)
        return (
            <div className="container">
                <h2>Add Game</h2>
                <form onSubmit={this.addGame.bind(this)} >
                    <input type="hidden" className="form-control" id="id"
                        value={this.state.id}  onChange={this.handleChange.bind(this)} />
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                        value={this.state.name}  onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" className="form-control" id="type"  value={this.state.type}  onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price"  value={this.state.price}  onChange={this.handleChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>

        );
    }
}
