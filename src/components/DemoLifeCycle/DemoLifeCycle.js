import React from 'react';
import PropTypes from 'prop-types';
import styles from './DemoLifeCycle.module.css';
import RenderLifeCycleExample from '../RenderLifeCycleExample/RenderLifeCycleExample';

class DemoLifeCycle extends React.Component{


  constructor(){
    super();
    this.state={
      data:"Samadhan"
    }
  }


  render(){

    return(
      <div>

        <header className='App-header'>
       <h1>Constructor Life Cycle Method</h1>
       <h3>DemoLifeCycle Component  :::  {this.state.data}</h3>
       
        </header>
      </div>
    )
  }
}


export default DemoLifeCycle;
