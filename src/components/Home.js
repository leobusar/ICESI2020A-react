import React, { Component }  from 'react';

export default class Home extends Component {

    render() {
        let game = this.props.game ;
        return (
          <h1>
              Welcome to Game Store
          </h1>
        );
    }
  }