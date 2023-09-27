import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


function Profile(){
  // const [logged, setlogged]=useState(false);
  const[logged,setlogged]=useState(3)

  return(
    <div>
      <header className='App-header'>
        
        {/* this is single condition */}
        
       {logged?<h1>Profile Component Welcome!</h1>:<h1>Hello Profile Component</h1>}
       {/* multiple codition  */}
       {logged==1?<h1>Welcome to Profile</h1>:
       logged==2?<h1>Hello to Profile</h1>:
       <h1>Hii Profile</h1>}
      </header>
    </div>
  )



  }
  

  



  



Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
