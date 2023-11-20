
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceDisplay1: <i class="fa-solid fa-dice-one fa-2xl"></i>,
      diceDisplay2: <i class="fa-solid fa-dice-one fa-2xl"></i>,
      roll : false,
      buttonClicked: false,

    };
  }

  onClickRollDice = () => {
    const diceNumber2 = Math.floor(Math.random() * (6 + 1));

    const diceNumber1 = Math.floor(Math.random() * (6 + 1));
    console.log(diceNumber1, diceNumber2)
    let diceDisplay1 = this.switchFunction(diceNumber1);
    let diceDisplay2 = this.switchFunction(diceNumber2);
    this.setState({
      roll : true, 
      buttonClicked: true,
    });
        // Reset rolling after the animation duration (1s in this example)
        setTimeout(() => {
          this.setState({
            roll : false, 
            diceDisplay1: diceDisplay1,
            diceDisplay2: diceDisplay2,
            buttonClicked: false
          });
        }, 1000);

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

    let { diceDisplay1, diceDisplay2,roll,buttonClicked } = this.state;

    return (
      <div >
        <div id="body">

          <div id="dices">
            <h1 id={`dice1${roll ? `roll`:``}`}>{diceDisplay1}</h1> <h1 id={`dice2${roll ? `roll`:``}`}>{diceDisplay2}</h1>
          </div>
        </div>


        <div id="buttons">
            <button  id="button" onClick={this.onClickRollDice}>{buttonClicked ? "Rolling...":"Roll Dice"}</button>
          </div>


      </div>
    );
  }
}



export default App;
