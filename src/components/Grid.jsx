import React from 'react';
import Row from './Row'

const GRID_SIZE = 3;
const GRID = [];

for (let i = 0; i < GRID_SIZE; i++) {
  GRID.push(i);
}

const player = [{character: 'X', number: 1}, {character: 'O', number: 2}]
export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: player[0].character,
      grid: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      won: false,
      winner: null
    }
    this.changePlayer = this.changePlayer.bind(this)
    this.changeGridState = this.changeGridState.bind(this)
  }

  changePlayer() {
    console.log('Here')
    this.state.currentPlayer === 'X' && !this.state.won ? 
        this.setState({currentPlayer: 'O'}) : this.setState({currentPlayer: 'X'})
    
  }

  changeGridState(x, y) {
    if(this.state.currentPlayer === 'X') {
      // eslint-disable-next-line
      this.state.grid[x][y] = 1
    } else {
      // eslint-disable-next-line
      this.state.grid[x][y] = 2
    }

    if(this.state.grid[0][0] !== 0 && (this.state.grid[0][0] === this.state.grid[0][1])&& (this.state.grid[0][1] === this.state.grid[0][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[0][0]
      this.setState({won: true})
    }
    if(this.state.grid[1][0] !== 0 && (this.state.grid[1][0] === this.state.grid[1][1]) && (this.state.grid[1][1] === this.state.grid[1][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[1][0]
      this.setState({won: true})
    }
    if(this.state.grid[2][0] !== 0 && (this.state.grid[2][0] === this.state.grid[2][1]) && (this.state.grid[2][1] === this.state.grid[2][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[2][0]
      this.setState({won: true})
    }
    if(this.state.grid[0][0] !== 0 && (this.state.grid[0][0] === this.state.grid[1][0]) && (this.state.grid[1][0] === this.state.grid[2][0])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[0][0]
      this.setState({won: true})
    }
    if(this.state.grid[0][1] !== 0 && (this.state.grid[0][1] === this.state.grid[1][1]) && (this.state.grid[1][1] === this.state.grid[2][1])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[0][1]
      this.setState({won: true})
    }
    if(this.state.grid[0][2] !== 0 && (this.state.grid[0][2] === this.state.grid[1][2]) && (this.state.grid[1][2] === this.state.grid[2][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[0][2]
      this.setState({won: true})
    }

    if(this.state.grid[0][0] !== 0 && (this.state.grid[0][0] === this.state.grid[1][1]) && (this.state.grid[1][1] === this.state.grid[2][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[0][0]
      this.setState({won: true})
    }
    if(this.state.grid[2][0] !== 0 && (this.state.grid[2][0] === this.state.grid[1][1]) && (this.state.grid[1][1] === this.state.grid[0][2])) {
      // eslint-disable-next-line
      this.state.winner = this.state.grid[2][0]
      this.setState({won: true})
    }
  }

  render() {
    return (
      this.state.won ? <div>Player <span style={{color: 'red', fontSize: '40px'}}><b>{this.state.winner}</b></span> WON!!!!!!!!!!!!!!!!</div> : 
      <div>
        {GRID.map(y =>
          <Row y={y} grid={GRID} changePlayer={this.changePlayer} currentPlayer={this.state.currentPlayer} changeGridState={this.changeGridState} />
        )}
      </div>
    )
  }
}