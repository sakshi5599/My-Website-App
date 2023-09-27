import React,{useState}    from 'react';
import PropTypes from 'prop-types';
import styles from './Student.module.css';
import Person from '../Person/Person';

  function Student(props){
    console.log(props)
  
    const [name,setdata]=useState("sam")
    function updatename(){
      // data="samadhan";
      setdata(name);
      // alert(data);
    }
    
    return (
      
      <div style={{backgroundColor:"yellow",margin:10}}>
      {/* //  <header className='App-header'> */}
        <h1>This is Props Example</h1>
        <h2>Hello..{props.name}</h2>
        <h3>Email:   {props.email}</h3>
        <h3> Others:  {props.address}</h3>

        
        {/* </header> */}
<Person name={name} email="saskhi@gmail.com" />
<button onClick={updatename}>Update Name</button>
<Person name="Hina"/>
      </div>
      
    ) 
    
  }
 
 

//defin funtion using propes 



Student.propTypes = {};

Student.defaultProps = {};

export default Student;
