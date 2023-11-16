import React, { Component } from "react";

import pokemonlist from "./pokemonlist";
import './PokemonCards.css';


// Function to shuffle an array (using Fisher-Yates algorithm)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


class PokemonCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isButtonVisible: true,
            areOtherDivsVisible: true,
            isFightVisible: false,
            pokemonTeam1: pokemonlist,
            pokemonTeam2: pokemonlist,
            shouldRender: false,
            ispokemonTeam1Visible: true,
            ispokemonTeam2Visible: true,
        };

    }

    handleClick = () => {
        let shuffledPokemonList = shuffleArray(pokemonlist);
        this.setState({
            isFightVisible: false,
            isButtonVisible: false,
            areOtherDivsVisible: false,
            isFightVisible: true,

            pokemonTeam1: shuffledPokemonList.slice(0, 5),
            pokemonTeam2: shuffledPokemonList.slice(5, 10),
        });
    };

    handleClickRematch = () => {
        let shuffledPokemonList = shuffleArray(pokemonlist);
        this.setState({
            isFightVisible: false,
            isFightVisible: true,
            ispokemonTeam1Visible : false,
            ispokemonTeam2Visible : false,
            pokemonTeam1: shuffledPokemonList.slice(0, 5),
            pokemonTeam2: shuffledPokemonList.slice(5, 10),
        });
        setTimeout(() => { 
            this.setState({
            ispokemonTeam1Visible : true,
            ispokemonTeam2Visible: true
        });
          }, 1000);
       
    };

    sumOfTeamPower = (Team) => {

        let sum = 0;
        for (let pokemon of Team) {
            sum += pokemon.base_experience;
        }

        return sum;
    }

    componentDidMount() {
        // Use setTimeout to delay rendering by 1000 milliseconds (1 second)
        setTimeout(() => {
            this.setState({ shouldRender: true });
        }, 1000);
    }

    handleClickBacktoStart = () => {
        this.setState({
            isButtonVisible: true,
            areOtherDivsVisible: true,
            isFightVisible: false,
        });
    }

    render() {

        let { isButtonVisible, areOtherDivsVisible, isFightVisible, pokemonTeam1, pokemonTeam2, ispokemonTeam1Visible,ispokemonTeam2Visible } = this.state;

        let sumTeam1 = this.sumOfTeamPower(pokemonTeam1);
        let sumTeam2 = this.sumOfTeamPower(pokemonTeam2);

        return (
            <div id="body">
                <h1 id="Tite">Pokemon League</h1>

                <div id="StartGame">

                    {isButtonVisible && (
                        <div>
                            <h1>Click to Start</h1>
                            <button id="startGameButton" onClick={this.handleClick}></button>
                        </div>

                    )}
                </div>

                <div>
                    {isFightVisible && (
                        <div id="fightBackGround">
                            <div id="PokemonList" >

                                {ispokemonTeam1Visible && (
                                    <div id="PokemonList">
                                        {pokemonTeam1.map(item => (
                                             
                                        <div id="Pokemon" className={`card${item.type} flip-card`} >
                                            <p id="pokemonName"><strong>{item.name}</strong></p>
                                            <img className={`image${item.type}`} id="pokemonImage" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(item.id).padStart(3, '0')}.png`} alt="Description of the image" />
                                            <p id="pokemonType"><strong>{item.type}</strong></p>
                                            <p id="pokemonExperience"><strong>{item.base_experience}</strong></p>

                                        </div>
                                    ))}
                                    </div>)}

                                <div>
                                    <h1 id="TeamResult1">The Omega Ruby Team with the total power of : [ {sumTeam1} ]</h1>
                                    <h1 id={sumTeam1 > sumTeam2 ? "TeamResult1" : "TeamResult2"}>The {sumTeam1 > sumTeam2 ? "Omega Ruby" : "Alpha Saphire"} Team Won the Match!!</h1>
                                    <button id="GameButton" class="MatchButton" onClick={this.handleClickRematch}>Rematch</button>

                                    <button id="GameButton" class="MatchButton" onClick={this.handleClickBacktoStart}>Back to Start</button>
                                    <h1 id="TeamResult2">The Alpha Saphire Team with the total power of : [ {sumTeam2} ]</h1>
                                </div>

                                {ispokemonTeam2Visible && (
                                    <div id="PokemonList">
                                        {pokemonTeam2.map(item => (
                                             
                                        <div id="Pokemon" className={`card${item.type} flip-card`} >
                                            <p id="pokemonName"><strong>{item.name}</strong></p>
                                            <img className={`image${item.type}`} id="pokemonImage" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(item.id).padStart(3, '0')}.png`} alt="Description of the image" />
                                            <p id="pokemonType"><strong>{item.type}</strong></p>
                                            <p id="pokemonExperience"><strong>{item.base_experience}</strong></p>

                                        </div>
                                    ))}
                                    </div>)}
                            </div>
                        </div>
                    )}
                </div>

                {areOtherDivsVisible && (
                    <div id="PokemonList" >
                        {pokemonlist.map((item, index) => (
                            <div key={index} >
                                <div id="Pokemon" className={`card${item.type} flip-card`}>
                                    <p id="pokemonName"><strong>{item.name}</strong></p>
                                    <img className={`image${item.type}`} id="pokemonImage" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(item.id).padStart(3, '0')}.png`} alt="Description of the image" />
                                    <p id="pokemonType"><strong>{item.type}</strong></p>
                                    <p id="pokemonExperience"><strong>{item.base_experience}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default PokemonCards;