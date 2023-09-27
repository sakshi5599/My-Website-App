import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './BasicForm.module.css';

function BasicForm(){
  const [name,setname]=useState("")
  const[tnc, settnc]=useState(false)
  const[interest, setinterset]=useState("")


  
  function getformdata(e){
   console.log(name,tnc,interest);
    e.preventDefault()
  }

  return (
    <div>

<header className='App-header'>
<h1>Application Form</h1>
  <form onSubmit={getformdata}>
    <input type="text" placeholder='name' value={name} className='inputbox-input' onChange={(e)=>setname(e.target.value)}></input><br />
    <select className='selectbox' value={interest} onChange={(e)=>setinterset(e.target.value)}>
      <option value="city">Kolhapur</option>
      <option>Solapur</option>
      <option>Delhi</option>
      <option>Mumbai</option>
      <option>Pune</option>
    </select>
<br/>
<input type="checkbox"onChange={(e)=>settnc(e.target.checked)} value={tnc} /><span>Accept Terms and condition</span><br/>
<button type="submit">Submit</button>
  </form>

</header>


    </div>
  )
}




BasicForm.propTypes = {};

BasicForm.defaultProps = {};

export default BasicForm;
