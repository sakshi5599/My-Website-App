import React from 'react';
import PropTypes from 'prop-types';
import styles from './parent.module.css';
import Child from '../child/child';

function parent(){
  return(
  <header className="App-header">
    <div><child/></div>
    </header>
    
  )
}
export default parent;
