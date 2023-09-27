import React from "react";
import Person from "./Person";

function ReuseCom() {
  const person = [
    { name: "Vishal Jadhav", City: "Pune", Gender: "Male", Age: 22 },
    { name: "Sakshi Gore", City: "Mumbai", Gender: "Female", Age: 34 },
    { name: "Sam Kale", City: "Delhi", Gender: "Male", Age: 43 },
    { name: "Somnath Jadhav", City: "Hydrabad", Gender: "Male", Age: 78 },
    { name: "Shivansh Gore", City: "Chennai", Gender: "Male", Age: 22 },
    { name: "Nikita Kadam", City: "Nagar", Gender: "Female", Age: 45 },
  ];
  return (
    <div>
      <header className="App-header">
        <h1>ReUse Component With List</h1>

        {
          //using map function by loop
          person.map((item) => (
            <Person data={item} />
          ))
        }
      </header>
    </div>
  );
}

export default ReuseCom;
