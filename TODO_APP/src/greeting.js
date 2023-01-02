// function Greeting(props){
//     return <button onlick>{props.btnName}</button>
// }
import React from 'react';
import logo from './logo.svg';
// function Greeting(props){

//         return (
//             <>
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>Hi React Troops We Heartly Welcome you</p>
//             <p>Here you can change the name</p>
//             <p>{props.name}</p>
//             <button onClick={()=>props.name("Prakash")}>Final Change </button>
//             {/* <button onClick={()=>props.name("Prakash")}>Final Change </button> */}
//             </>
//         )
// }
class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        console.log(this.name);
    }
    render(){
        return (
            <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hi React Troops We Heartly Welcome you</p>
            <p>Here you can change the name - {this.name}</p>
            
           
            </>
        )
    }
            
}
    
export default Greeting;