class Money extends React.Componet{
    
    render(){
        let (money) = this.props;
    let millionaire = (money > 1000000) ;
        return(
            <p>You are a {millionaire? "Millionaire" : "Poor"}</p>
        );
    }
}