import React from "react";
import { useState } from "react";

function PostExample() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [city, Setcity] = useState("");

  function SaveUser(){
    console.log({name,email,city});
    let data={name,email,city}
 fetch("http://localhost:4000/todo",{
    method:"POST",
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
 }).then((result)=>{
    //console.log("result",result);
   result.json().then((resp)=>{
    console.log("response",resp);
   })
 })

  }


  return (
    <div>
      <h1>Post Api Call</h1>
      {/* create form */}
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) =>{Setname(e.target.value)}}
        placeholder="enter name"
      ></input>
      <br />
      <input
        type="email"
        value={email}
        name="email"
        onChange={(e) =>{Setemail(e.target.value)}}
        placeholder="enter email"
      ></input>
      <br />

      <input
        type="text"
        value={city}
        onChange={(e) =>{Setcity(e.target.value)}}
        name="city"
        placeholder="enter city"
      ></input>
      <br />
      <br />
      <button onClick={SaveUser}> Submit</button>
    </div>
  );
}
export default PostExample;
