import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function DynamicRoutingexample() {
  const users = [
    {
      id: 1,
      name: "sakshi",
      city: "solapur",
      contact: 3434343,
      gender: "female",
      age: 43,
    },
    {
      id: 2,
      name: "sam",
      city: "pune",
      contact: 9090990,
      gender: "male",
      age: 23,
    },
    {
      id: 3,
      name: "vishal",
      city: "mumbai",
      contact: 121232323,
      gender: "male",
      age: 33,
    },
    {
      id: 4,
      name: "seema",
      city: "hydrabad",
      contact: 44444444,
      gender: "female",
      age: 22,
    },
    {
      id: 5,
      name: "komal",
      city: "delhi",
      contact: 55555555,
      gender: "female",
      age: 12,
    },
    {
      id: 6,
      name: "meena",
      city: "benguluru",
      contact: 777777777,
      gender: "female",
      age: 23,
    },
  ];

  return (
    <div >
     
        <h1>Dynamic Routing example component</h1>
        {users.map((item) =>
          <div key={item.id}>
            <Link to={"/DynamicRoute/"+item.id}><h3>{item.name}</h3></Link>
          </div>
        )}
           
      
    </div>
  );
}
export default DynamicRoutingexample;
