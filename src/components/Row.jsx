import React from 'react';
import Cell from './Cell'
import '../css/Row.css'

const Row = ({y, grid, changePlayer, currentPlayer, changeGridState}) =>
  <div className="grid-row">
    {
      grid.map(x => <Cell x= {x} y= {y} changePlayer={changePlayer} currentPlayer={currentPlayer} changeGridState={changeGridState}/>)
    }
  </div>

export default Row