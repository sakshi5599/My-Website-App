import React from 'react'

class DidMountLifeCycle extends React.Component{
    constructor(){
        super();
        this.state={
            name:"sakshi"
        }
    }
    componentDidMount()
{
    console.log("did mount cylce");
}
    render(){
        return(
            <div>
                <header className='App-header'>
            <h2>Helllo DidMountLifeCycle Methoods:={this.state.name}</h2>
            <button onClick={()=>{this.setState({name:"samdhan"})}}>Update data</button>
            </header></div> 
        )
    }
}

export default DidMountLifeCycle