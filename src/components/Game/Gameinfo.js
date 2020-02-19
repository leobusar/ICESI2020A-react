import React, { Component }  from 'react';

export default class Gameinfo extends Component {


    render() {
        let game =  { id: 3, name: "Celeste", type: "Plataformero", price: "45000" };
        let param =  this.props.match.params;
        game.id =  param.id;
        game.name= param.name;
        console.log(param)
        return (
          <ul>
             <li>{game.id}</li>
             <li>{game.name}</li>
             <li>{game.type}</li>
             <li>{game.price}</li>
             <li>                    
                <button type="button" className="btn btn-primary" >Edit</button>
                <button type="button" className="btn btn-danger ml-3">Delete</button>
              </li>
          </ul>
        );
    }
  }
