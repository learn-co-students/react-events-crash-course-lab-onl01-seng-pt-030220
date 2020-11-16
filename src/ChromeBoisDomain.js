import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  constructor() {
    super()
      // this.state = {}
  }
  
  handleMouseMove = (event) => {
    
  
    drawChromeBoiAtCoords(event.clientX, event.clientY)
 

  }

  handleKeyPress = (event) => {
    if (event.key === 'a') {
      // console.log('a was pressed')
      resize("+")
    }
    else if (event.key === 's') {
      // console.log('s was pressed')
      resize("-")

    }
  }

  
  
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
