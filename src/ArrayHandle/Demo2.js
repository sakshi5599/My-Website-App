import React from "react";
import {Table} from 'react-bootstrap'

function Demo2() {
  const user = [
    { name: "Harish", email: "harish@gmail.com", contact: 434343 },
    { name: "Vishal", email: "vishal@gmail.com", contact: 90000877 },
    { name: "Sam", email: "sam@gmail.com", contact: 767676887 },
    { name: "Samadhan", email: "samadhan@gmail.com", contact: 9090909 },
    { name: "Somnath", email: "somnath@gmail.com", contact: 3434343 },
    { name: "Sakshi", email: "sakshi@gmail.com", contact: 46656565 },
    { name: "Somakshi", email: "somakshi@gmail.com", contact: 67676767 },
  ];
  return (
    <div>
      <header className="App-header">
        <h1>List of using Bootstrap Table</h1>
        <Table striped bordered hover variant="dark" style={{marginLeft:"30px"}}>
          <tbody>
           
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
         

            {user.map((Data,index) => 
              <tr key={index}>
                 <td>{index}</td>
                <td>{Data.name}</td>
                <td>{Data.email}</td>
                <td>{Data.contact}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default Demo2;
