import React, { Component } from "react";
import './App.css';

class button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
            counter : 0,
        };

    }

    onClick = () =>{
        let counter = this.state.counter;
        console.log(counter);
        counter++;
        this.setState({
            buttonClicked : true,
            counter : counter,
        });
    }
    render() {
        let { buttonClicked,counter } = this.state;
        return (
            <div>
                <div id="body" >

                    <div class="body">
                        <h1> {buttonClicked ? `Clicked ${counter} times`: `Hello`}</h1>
                    </div>
                </div>


                <div id="buttons">
                    <button id="button" onClick={this.onClick}>{buttonClicked ? `Clicked`:`Click Me`}</button>
                </div>

            </div>
        );
    }
}

export default button;