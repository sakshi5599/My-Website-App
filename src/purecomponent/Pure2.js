import React, { PureComponent } from "react";

class Pure2 extends PureComponent{

    render(){
        console.log("pure2 compoent check redndering");
        return(

            <div>

                <h1>This is Pure component child :{this.props.count}</h1>
            </div>
        )
    }


}
export default Pure2;