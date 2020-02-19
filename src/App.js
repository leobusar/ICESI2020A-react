import React, { Component } from 'react';
import './App.css';
//import Games from './components/Game/Games'
import routing from './config/routes'

class App extends Component {

  constructor() {
    super();
    this.state = {
      owner: "Leo",
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <ul>
            <li>
              <a  href="/">Home</a>
            </li>
            <li>
              <a href="/games">Games</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        {routing}
      </div>
    );
  }
}

export default App;
