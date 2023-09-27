import React from "react";

function Demo() {
  // map function is used looping statement and for loop also using looping function
  //but map in function using return statement
  //and for loop function is not using return statement;
  //so use always map function in  react js
  //   const students = [
  //     "Sakshi",
  //     "Samadhan",
  //     "Somakshi",
  //     "Sam",
  //     "Raja",
  //     "Somnath",
  //     "Soma",
  //   ];

  //also use object array
  const student = [
    { name: "sakshi", email: "saskhi@gmail.com", contact: 84934834372 },
    { name: "Sam", email: "sam@gmail.com", contact: 4000002 },
    { name: "Vishal", email: "vishal@gmail.com", contact: 800000372 },
    { name: "Somnath", email: "somanath@gmail.com", contact: 2222234372 },
    { name: "Harish", email: "harish@gmail.com", contact: 900000372 },
  ];
  //using map function it is used to looping statement use map function
  //   students.map((items) => {
  //     console.log("My name is :=" + items);
  //   });

  //and using for loop function
  //   let i;
  //   for (i = 0; i < students.length; i++) {
  //     console.log("in a for loop:=", students[i]);
  //   }

  return (
    <div>
      <header className="App-header">
        <h2>Array Handle With List</h2>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>

          {student.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}
export default Demo;
