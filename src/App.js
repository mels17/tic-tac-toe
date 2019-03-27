import React, { Component } from 'react';
import Grid from './components/Grid'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.resetGame = this.resetGame.bind(this)
    this.state = {
      game: () => <Grid />
    }
  }

  resetGame() {
    this.setState({
      game: () => <Grid />
    })
  }
  render() {
    const Game = this.state.game
    return (
      <div style={{background: 'black'}}>
        <div className="app">
          <h2>Tic Tac Toe</h2>
          <Game />
          <button className='button' onClick={this.resetGame}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
