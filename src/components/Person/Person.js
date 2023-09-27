import React from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';

 class Person extends React.Component{
  render(){
    return(
    <div>
      {/* <header className='App-header'> */}
      <h1>This Props and Class Expamle</h1>
      <h2>Student Hello {this.props.name}</h2>
      <h3>{this.props.email}</h3>
      <h1>{this.props.name}</h1>
      {/* </header> */}
    </div>
    )
  }
}

Person.propTypes = {};

Person.defaultProps = {};

export default Person;
