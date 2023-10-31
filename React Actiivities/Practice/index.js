class App extends React.Component{
    render(){
        return(
            <div>
            <Hello
                to = "ryan"
                from = "joerge"
                bangs={2}
            />
            <Hello
                to = "calles"
                from = "lou"
            />
            <Hobbies
            name = "ryan"
            
            hobby = "Coding"
            />

            <Money
                money = {100000000}
            />
          </div>  
          
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));