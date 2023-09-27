import React from "react";
import { Table } from "react-bootstrap";

function Demo3() {
  //define array object
  const Users = [
    {
      Name: "Teena",
      Email: "teena@gmail.com",
      Address: [
        {
          HouseNo: "233DA",
          City: "Pune",
          Tal: "Pune",
          Dist: "Pune",
          Country: "India",
        },
        {
            HouseNo: "233DA",
            City: "Pune",
            Tal: "Pune",
            Dist: "Pune",
            Country: "India",
          },
          {
            HouseNo: "233DA",
            City: "Pune",
            Tal: "Pune",
            Dist: "Pune",
            Country: "India",
          },
          {
            HouseNo: "233DA",
            City: "Pune",
            Tal: "Pune",
            Dist: "Pune",
            Country: "India",
          },
      ],
    },
    {
      Name: "Sakshi",
      Email: "Sakshi@gmail.com",
      Address: [
        {
          HouseNo: "893AD",
          City: "Solapur",
          Tal: "Pune",
          Dist: "Solaour",
          Country: "India",
        },
        {
            HouseNo: "893AD",
            City: "Solapur",
            Tal: "Pune",
            Dist: "Solaour",
            Country: "India",
          },
          {
            HouseNo: "893AD",
            City: "Solapur",
            Tal: "Pune",
            Dist: "Solaour",
            Country: "India",
          },
          {
            HouseNo: "893AD",
            City: "Solapur",
            Tal: "Pune",
            Dist: "Solaour",
            Country: "India",
          },

      ],
    },
    {
      Name: "Samadhan",
      Email: "Samadhan@gmail.com",
      Address: [
        {
          HouseNo: "393TD",
          City: "Delhi",
          Tal: "Dekhi",
          Dist: "Delhi",
          Country: "India",
        },
        {
            HouseNo: "393TD",
            City: "Delhi",
            Tal: "Dekhi",
            Dist: "Delhi",
            Country: "India",
          },
          {
            HouseNo: "393TD",
            City: "Delhi",
            Tal: "Dekhi",
            Dist: "Delhi",
            Country: "India",
          },
          {
            HouseNo: "393TD",
            City: "Delhi",
            Tal: "Dekhi",
            Dist: "Delhi",
            Country: "India",
          },
          {
            HouseNo: "393TD",
            City: "Delhi",
            Tal: "Dekhi",
            Dist: "Delhi",
            Country: "India",
          },

      ],
    },
    {
      Name: "Sam",
      Email: "sam@gmail.com",
      Address: [
        {
          HouseNo: "333TT",
          City: "Mumbai",
          Tal: "Mumbai",
          Dist: "Mumbai",
          Country: "India",
        },
        {
            HouseNo: "333TT",
            City: "Mumbai",
            Tal: "Mumbai",
            Dist: "Mumbai",
            Country: "India",
          },
          {
            HouseNo: "333TT",
            City: "Mumbai",
            Tal: "Mumbai",
            Dist: "Mumbai",
            Country: "India",
          },
          {
            HouseNo: "333TT",
            City: "Mumbai",
            Tal: "Mumbai",
            Dist: "Mumbai",
            Country: "India",
          },

      ],
    },
    {
      Name: "Harish",
      Email: "harisha@gmail.com",
      Address: [
        {
          HouseNo: "9499GH",
          City: "Hydrabad",
          Tal: "Hydrabad",
          Dist: "Hydrabad",
          Country: "India",
        },
        {
            HouseNo: "9499GH",
            City: "Hydrabad",
            Tal: "Hydrabad",
            Dist: "Hydrabad",
            Country: "India",
          },
          {
            HouseNo: "9499GH",
            City: "Hydrabad",
            Tal: "Hydrabad",
            Dist: "Hydrabad",
            Country: "India",
          },
          {
            HouseNo: "9499GH",
            City: "Hydrabad",
            Tal: "Hydrabad",
            Dist: "Hydrabad",
            Country: "India",
          },

      ],
    },
    {
      Name: "Seema",
      Email: "Seema@gmail.com",
      Address: [
        {
          HouseNo: "434AA",
          City: "Chennai",
          Tal: "Chennai",
          Dist: "Tamilnadu",
          Country: "India",
        },
        {
            HouseNo: "434AA",
            City: "Chennai",
            Tal: "Chennai",
            Dist: "Tamilnadu",
            Country: "India",
          },

          {
            HouseNo: "434AA",
            City: "Chennai",
            Tal: "Chennai",
            Dist: "Tamilnadu",
            Country: "India",
          },
          {
            HouseNo: "434AA",
            City: "Chennai",
            Tal: "Chennai",
            Dist: "Tamilnadu",
            Country: "India",
          },

      ],
    },
    {
      Name: "Sunita",
      Email: "Sunita@gmail.com",
      Address: [
        {
          HouseNo: "4343GG",
          City: "Noida",
          Tal: "Noida",
          Dist: "Noida",
          Country: "India"
        },

        {
            HouseNo: "4343GG",
            City: "Noida",
            Tal: "Noida",
            Dist: "Noida",
            Country: "India"
          },
          {
            HouseNo: "4343GG",
            City: "Noida",
            Tal: "Noida",
            Dist: "Noida",
            Country: "India",
          },
      ],
    },
    {
      Name: "Shivansh",
      Email: "Shivansh@gmail.com",
      Address: [
        {
          HouseNo: "333AA",
          City: "Latur",
          Tal: "Latur",
          Dist: "Latur",
          Country: "India",
        },
        {
            HouseNo: "333AA",
            City: "Latur",
            Tal: "Latur",
            Dist: "Latur",
            Country: "India",
          },
          {
            HouseNo: "333AA",
            City: "Latur",
            Tal: "Latur",
            Dist: "Latur",
            Country: "India",
          },
          {
            HouseNo: "333AA",
            City: "Latur",
            Tal: "Latur",
            Dist: "Latur",
            Country: "India",
          },
      ],
    },
    {
      Name: "Varsha",
      Email: "varshaa@gmail.com",
      Address: [
        {
          HouseNo: "4343AH",
          City: "Nagar",
          Tal: "Nagar",
          Dist: "Nagar",
          Country: "India",
        },
        {
            HouseNo: "4343AH",
            City: "Nagar",
            Tal: "Nagar",
            Dist: "Nagar",
            Country: "India",
          },
          {
            HouseNo: "4343AH",
            City: "Nagar",
            Tal: "Nagar",
            Dist: "Nagar",
            Country: "India",
          },
          {
            HouseNo: "4343AH",
            City: "Nagar",
            Tal: "Nagar",
            Dist: "Nagar",
            Country: "India",
          },

      ],
    },
  ];
  return (
    <div>
      <header className="App-header">
        <h1>Nested List and Nested Array Object</h1>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
                <th>Sr.NO</th>
              <th> First Name</th>
              <th>Email Address</th>

              <th>Address</th>
            </tr>
          </tbody>

          {
          Users.map((item,i) => 
            <tr key={i}>
                <td>{i+1}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>
                <Table striped bordered hover variant="dark">
                  <tbody>
                    
                 
                  {
                  item.Address.map((data,i) => 
                    <tr key={i}>
                        <td>{i+1}</td>
                      <td>{data.HouseNo}</td>
                      <td>{data.Tal}</td>
                      <td>{data.Dist}</td>
                      <td>{data.City}</td>
                      <td>{data.Country}</td>
                    </tr>
                  )}
                   </tbody>
                </Table>
              </td>
            </tr>
          )}
        </Table>
      </header>
    </div>
  );
}

export default Demo3;
