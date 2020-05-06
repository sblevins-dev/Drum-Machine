import React from 'react';
import './keys.css';

class Keys extends React.Component {
  constructor() {
    super();
    this.state = {
      display: 'Click Or Press A Button To Begin',
      style: {backgroundColor: 'red'},
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSound(event) {
    event.target.children[0].play();
    this.setState({
      display: event.target.id,
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 81:
        document.getElementById('Q').play();
        this.setState({
          display: 'Closed-hh',
        });
        break;
      case 87:
        document.getElementById('W').play();
        this.setState({
          display: 'Kick',
        });
        break;
      case 69:
        document.getElementById('E').play();
        this.setState({
          display: 'Kick-n-Hat',
        });
        break;
      case 65:
        document.getElementById('A').play();
        this.setState({
          display: 'Open-HH',
        });
        break;
      case 83:
        document.getElementById('S').play();
        this.setState({
          display: 'Clap',
        });
        break;
      case 68:
        document.getElementById('D').play();
        this.setState({
          display: 'Heater-1',
        });
        break;
      case 90:
        document.getElementById('Z').play();
        this.setState({
          display: 'Heater-2',
        });
        break;
      case 88:
        document.getElementById('X').play();
        this.setState({
          display: 'Heater-3',
        });
        break;
      case 67:
        document.getElementById('C').play();
        this.setState({
          display: 'Heater-4',
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id='pad'>
        <div id='display'>{this.state.display}</div>
        <div id='drum-machine' className='drum-pad'>
          <button id='Closed-HH' className='drum-pad' onClick={this.playSound}>
            Q
            <audio
              id='Q'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            ></audio>
          </button>
          <button id='Kick' className='drum-pad' onClick={this.playSound}>
            W
            <audio
              id='W'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            ></audio>
          </button>
          <button id='Kick-n-Hat' className='drum-pad' onClick={this.playSound}>
            E
            <audio
              id='E'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            ></audio>
          </button>
          <button id='Open-HH' className='drum-pad' onClick={this.playSound}>
            A
            <audio
              id='A'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            ></audio>
          </button>
          <button id='Clap' className='drum-pad' onClick={this.playSound}>
            S
            <audio
              id='S'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            ></audio>
          </button>
          <button id='Heater-1' className='drum-pad' onClick={this.playSound}>
            D
            <audio
              id='D'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            ></audio>
          </button>
          <button id='Heater-2' className='drum-pad' onClick={this.playSound}>
            Z
            <audio
              id='Z'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            ></audio>
          </button>
          <button id='Heater-3' className='drum-pad' onClick={this.playSound}>
            X
            <audio
              id='X'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            ></audio>
          </button>
          <button id='Heater-4' className='drum-pad' onClick={this.playSound}>
            C
            <audio
              id='C'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            ></audio>
          </button>
        </div>
      </div>
    );
  }
}

export default Keys;
