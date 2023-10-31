class Hello extends React.Component{

    // handleInputChange = (e) => {
    //     this.setState({ inputNumber: e.target.value });
    //   };
    //   constructor() {
    //     super();
    //     this.state = {
    //       inputNumber: '',
    //       result: 0,
    //     };
    //   }
    
    //   handleInputChange = (e) => {
    //     this.setState({ inputNumber: e.target.value });
    //   };
    
    //   handleAddNumbers = () => {
    //     const { inputNumber } = this.state;
    //     const fixedNumber = 10; // You can change this to any fixed number you want.
    //     const result = parseInt(inputNumber) + fixedNumber;
    
    //     this.setState({ result });
    //   };
    static defaultProps = {
           bangs : 1,
    }
    render(){
        //     <div>
        //     <h1>Number Addition</h1>
        //     <input
        //       type="number"
        //       placeholder="Enter a number"
        //       value={this.state.inputNumber}
        //       onChange={this.handleInputChange}
        //     />
        //     <button onClick={this.handleAddNumbers}>Add</button>
        //     <p>Result: {this.state.result}</p>
        //   </div> 

        const {to,from,bangs} = this.props;
        
        let ex = "!".repeat(bangs)
        return (
        <div>
        <div><h1>Hello{ex} {to} from: [{from}]</h1></div>
        <div><h1>How Are you {from} from: [{to}]</h1></div>
        </div>
           
             );
    }
}