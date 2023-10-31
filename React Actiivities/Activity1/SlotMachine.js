class SlotMachine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isClicked: false,
        };
    }
    onClickHandlerSetTrue = () =>{
        this.setState({ isClicked: true });
    }


    
    render(){
        let Numbers = [];
        let randomSpin = () =>{
            switch(Math.floor(Math.random() * (3 - 1)) + 1){
            case 1 : 
                return "🍊";
            case 2 : 
                return "🍒";
            case 3 : 
                return "🍊";
            }
        }

        let checkIfWon = () =>{
            let MikanCounter = 0;
            let CherryCouner = 0;
            for(let i = 0; i < 3 ; i++){
                if(Numbers[i] === "🍊"){
                    MikanCounter++;
                } else{
                    CherryCouner++;
                }
            }
           
            if(MikanCounter === 3 || CherryCouner === 3)
                return "You Won";
            else 
                return "You Lose";
        }
        
        for(let i = 0; i < 3 ; i++ ){
            Numbers[i] = randomSpin();
           }

        return(
            <div>
                <h1>{checkIfWon() === "You Won"? "!!Congratiolations you Won!! ":"Click the button to start"}</h1>
                <button onClick={this.onClickHandlerSetTrue} >Click Here</button>
                <p>{Numbers[0]} , {Numbers[1]}, {Numbers[2]}{}</p>
                <p>{checkIfWon()}</p>


            </div>
        );
    }
}