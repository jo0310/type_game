import React, { Component } from 'react';


export default class Inst extends Component {
  

  

  render() {
    return (
      <div>
        <h3>Instructions</h3>
        <ul>
            <li>Every 5 seconds a word will appear in the box.</li>
            <li>You will have 5 seconds to correctly type the word.</li>
            <li> If you type the word correctly the score will be updated by one and next word will appear in the same box after 5 seconds.</li>
            <li>If you are not able to type the word after 5 seconds a new word will appear in the second box.</li>
            <li>At this point you are not allowed to attempt the word in the first box.</li>
            <li>As the level increases the time given to attempt a word also reduces.</li>
            <li>Once all boxes are filled the game will end.</li>
            <li>You can also log your score for future reference.</li>
        </ul>
      </div>
    )
  }
}