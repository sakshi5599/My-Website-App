import React from 'react';
import PropTypes from 'prop-types';
import styles from './RenderLifeCycleExample.module.css';

class RenderLifeCycleExample extends React.Component{
  render(){
    console.log(this.props)
    return(
     
      <div>
      <h2>Hello Component Render Life Cycle Component</h2>
      <p>{this.props.name}</p>
    
      </div>
    )
  }
}
export default RenderLifeCycleExample;
