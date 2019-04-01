import React from 'react';
import '../css/Cell.css'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      currentPlayer: 'X',
      x: this.props.x,
      y: this.props.y
    }
    this.setClicked = this.setClicked.bind(this)
  }

  setClicked() {
    this.setState({isClicked: true, currentPlayer: this.props.currentPlayer})
    this.props.changeGridState(this.state.x, this.state.y)
    this.props.changePlayer()
  }

  render() {
    var color = 'blueviolet';
    if (this.state.currentPlayer === 'X') {
      color = 'deeppink'
    }
    return this.state.isClicked ?
      <div className='grid-cell' style={{color : color}}><b>{this.state.currentPlayer}</b></div> :
      <div className='grid-cell' onClick={this.setClicked} />
  }
}