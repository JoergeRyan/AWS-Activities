
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceDisplay1: <i class="fa-solid fa-dice-one fa-2xl"></i>,
      diceDisplay2: <i class="fa-solid fa-dice-one fa-2xl"></i>,
      roll: false,
      buttonClicked: false,

    };
  }

  onClickRollDice = () => {
    
    let diceNumber2 = Math.floor(Math.random() * (6 + 1));
    let diceNumber1 = Math.floor(Math.random() * (6 + 1));
    let diceDisplay1 = this.switchFunction(diceNumber1);
    let diceDisplay2 = this.switchFunction(diceNumber2);
    this.setState({
      roll: true,
      buttonClicked: true,
    });

    let intervalId = setInterval(() =>{
       diceNumber2 = Math.floor(Math.random() * (6 + 1));
       diceNumber1 = Math.floor(Math.random() * (6 + 1));
       diceDisplay1 = this.switchFunction(diceNumber1);
       diceDisplay2 = this.switchFunction(diceNumber2);
       console.log(diceNumber1)
       this.setState({
        diceDisplay1: diceDisplay1,
        diceDisplay2: diceDisplay2,
      }); 
    }, 350);
   
    // Reset rolling after the animation duration (1s in this example)
    setTimeout(() => {
      clearInterval(intervalId);
      this.setState({
        roll: false,
        buttonClicked: false
      }); 

    }, 2000);
  }

  switchFunction = (diceNumber = 1) => {
    switch (diceNumber) {
      case 1:
        return <i class="fa-solid fa-dice-one fa-2xl"></i>
      case 2:
        return <i class="fa-solid fa-dice-two fa-2xl"></i>
      case 3:
        return <i class="fa-solid fa-dice-three fa-2xl"></i>
      case 4:
        return <i class="fa-solid fa-dice-four fa-2xl"></i>
      case 5:
        return <i class="fa-solid fa-dice-five fa-2xl"></i>
      case 6:
        return <i class="fa-solid fa-dice-six fa-2xl"></i>
      default:
        return <i class="fa-solid fa-dice-six fa-2xl"></i>
    }
  }
  render() {

    let { diceDisplay1, diceDisplay2, roll, buttonClicked } = this.state;

    return (
      <div id="full">
        <div id="body">

          <div id="dices">
            <h1 id={`dice1${roll ? 'roll' : ''}`}>{diceDisplay1}</h1> <h1 id={`dice2${roll ? 'roll' : ''}`}>{diceDisplay2}</h1>
          </div>
        </div>


        <div id="buttons">
          <button id="button" onClick={this.onClickRollDice}>{buttonClicked ? 'Rolling...' : 'Roll Dice'}</button>
        </div>
      </div>
    );
  }
}



export default App;
