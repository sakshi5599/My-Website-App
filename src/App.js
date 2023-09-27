import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import User from './components/User';
import Members from './components/Members';
import RenderLifeCycleExample from './components/RenderLifeCycleExample/RenderLifeCycleExample';

function App() {
  const[number,Setnumber]=useState(0)
  const[Name,SetName]=useState("Samadhan");

  function incrementdata(){
    Setnumber(number+1);
  }

  function getData(){
    alert("Hello Component App")
  }
  return (
    <div className="App">
      <header className="App-header">
       <div>
          <p>The increament number s</p>
          <p>number:{number}</p>
        <button btn-btn-primary value={number} onClick={incrementdata}>Incereament </button>
       </div>
       <User data={getData} />
       <Members  data={getData}/>
       
       <RenderLifeCycleExample name={Name}/>
       <button onClick={()=>SetName("Somakshi")}>Update Data</button>
      </header>
      
    </div>
  );
}

export default App;
