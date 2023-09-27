import React, { useEffect, useState } from "react";

function Student() {
  const [users, Setusers] = useState([]);
  const [name,Setname]=useState("");
  const[email,Setemail]=useState("");
  const[city,Setcity]=useState("");

  useEffect(() => {
    getuser();
  }, []);
  console.log(users);
  function getuser() {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);

        Setusers(resp);
        Setname([0].name)
        Setemail([0].email) 
        Setcity([0].city)

      });
    });
  }

  function DeleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getuser();
      });
    });
  }

  return (
    <div>
      <h1>Get Api Call</h1>

      <table border="1">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
            <td>Action</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => DeleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>

        <input type="text"  value={name} name="name"></input><br/>
        <input type="text"  value={email} name="email"></input><br/>
        <input type="text"  value={city} name="city"></input><br/>
        <button>Update User</button>

      </div>
    </div>
  );
}
export default Student;
