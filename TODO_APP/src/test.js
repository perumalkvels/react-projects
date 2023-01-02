import React from 'react';


class Test extends React.Component {

    constructor(props){
        super(props)

         
    }

    render(){
        return (<>
            <h1>Test - {this.props.name}</h1>
            <button onClick={()=>this.props.changeName("Prakash")}>Change name 2</button>
        </>);
    }

}
  

export default Test;