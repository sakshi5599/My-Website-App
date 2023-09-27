import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

// const Home = () => (
//   <div className={styles.Home}>
//     Home Component
//   </div>

// );
class Home extends Component{
 
  constructor(){
    super();
    this.state={
     data:1
      //  data:"Somakshi",
      
    }
  }
  apple(){
//  this.setState({data: "Samadhan"})
   this.setState({data:this.state.data+1})

  }
  render(){
    return(
      <div>
        <header className='App-header'>
        <h1>{this.state.data}</h1>
        <h1>This Is State Component example</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
       
        </header>
      </div>
    )
  }



}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
