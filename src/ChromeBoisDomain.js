import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  //// MY ANSWER
  // handleMouseMove = (event) => {
  //   //https://stackoverflow.com/questions/3011418/onmousemove-get-mouse-position/15123357
  //   // console.log(event)
  //   const x = event.clientX
  //   const y =event.clientY
  //   drawChromeBoiAtCoords(x, y)
  //   /* TODO: This method should capture the `x` and `y` coordinates of the mouse
  //    * from the event and use them to invoke the `drawChromeBoiAtCoords`
  //    * function that has been provided and is already imported
  //    * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
  //    */
  // }
  // handleToggleCycling = (event) =>{
  // /* TODO: Create an event handler which, when fired, invokes the provided
  //  * `toggleCycling` function with no arguments. Don't forget the click event
  //  * listener that should fire it!
  //  */
  //   toggleCycling()
  // }
  
  // handleResize = (event) => {
  // /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  // /* is pressed. When a key is pressed, an event handler should invoke the
  // /* provided `resize` function with a single argument of either '+' or '-'
  // /* if the key pressed was 'a', then it should call `resize` with '+'
  // /* if the key pressed was 's', then it should call `resize` with '-' 
  //  */
  //   console.log(event.keyCode)
  //   const letterA = 65
  //   const letterS = 83
  //   if (event.keyCode === letterA){
  //       resize("+")
  //   } else if (event.keyCode === letterS){
  //       resize("-")
  //   }
  //  }

  //Learn.co answer
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
   
  
//   render() {
//     return (
//       <canvas 
//         onMouseMove={this.handleMouseMove}
//         onClick={this.handleToggleCycling}
//         onKeyDown={this.handleResize}
//         width='900'
//         height='600'
//         tabIndex="0">
//       </canvas>
//     )
//   }
// }
