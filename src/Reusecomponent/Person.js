import React from "react";
import {Table} from 'react-bootstrap'

function Person(props){
    return(
        <div>
            {/* <span>{props.data.name}</span>
            <span>{props.data.City}</span>
            <span>{props.data.Gender}</span>
            <span>{props.data.Age}</span> */}
            <Table striped bordered hover variant="dark">
               
                <tbody>  
                    <tr>
                       <td>{props.data.name}</td>
                       <td>{props.data.City}</td>
                       <td>{props.data.Gender}</td>
                       <td>{props.data.Age}</td>

                    </tr>
                    </tbody>
            </Table>
        </div>
    )
}

export default Person;