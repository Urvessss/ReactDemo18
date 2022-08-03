import { Component } from "react";


class ClassState extends Component{
constructor(){
    super();
    this.name="Urvesh Patil";
    this.state={
        num:0
    }
}
incrementNum=()=>{
    this.setState({
        num:this.state.num+1
    })
}
    render(){
        return(
            <div>
            <h2>Number:{this.state.num}</h2>
            <h4>Name:{this.name}</h4>
            <h4>Company Name:{this.props.company}</h4>
         
            <button onClick={this.incrementNum}> Clicked </button>
            </div>
        )
    }
}
export default ClassState