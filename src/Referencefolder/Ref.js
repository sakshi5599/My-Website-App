import React,{createRef} from "react";

class Ref extends React.Component{

    constructor(){
        super();
        this.inputref=createRef();
    }
    componentDidMount(){
        // console.log("compoent did mount",this.inputref.current.value="1000");
    }

    //create function
    getvalue(){
        console.log(this.inputref.current.value);
        this.inputref.current.style.color="red"
        this.inputref.current.style.backgroundColor="yellow"
        this.inputref.current.style.fontSize="20px"
    }

    render(){
        return(


            <>
            <header className="App-header">
            <h1>This is Ref Component</h1>
            <input type="text" ref={this.inputref}/><button onClick={()=>this.getvalue()}>Check Ref</button>
            </header>
            </>
        )
    }
}
export default Ref;