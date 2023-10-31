class Hobbies extends React.Component{
    render(){
        const {name,hobby} = this.props;
        return(
        <div>
            <p>{name} Loves {hobby}</p>    
        </div>
        );
    }
}