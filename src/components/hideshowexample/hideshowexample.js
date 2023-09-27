import React from 'react';
import PropTypes from 'prop-types';
import styles from './hideshowexample.module.css';

function Hideshowexample(){
  const[status, setstatus]=React.useState(true);
  return(

    <div>
    <header className='App-header'>
    <h1>This Example is Hide and Show Button On click</h1>
   {
    status? <h2>Hello World !</h2>:null
   }
   {/* use two button hide show from
    */}
    {/* <button onClick={()=>setstatus(false)}>Hide</button>
    <button onClick={()=>setstatus(true)}>Show</button> */}
    {/* but only button hide and show this called toggle button */}
    <button onClick={()=>setstatus( !status)}>Toggle</button>
    </header>
    </div>
  )
}


Hideshowexample.propTypes = {};

Hideshowexample.defaultProps = {};

export default Hideshowexample;
