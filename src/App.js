import React from "react";
import { ReactDOM } from "react";
import './App.css';
const name="Roronoa Zoro";
const time=new Date().toLocaleTimeString();
const date= new Date().toLocaleDateString();

function App() {
  return (
    <div className="App">
   
  <h1>{name}</h1>,
  <h2>Current Local Time is:<br></br>{time}</h2>
  <h2>Current Date is<br></br>{date}</h2>

    </div>
  );
}

export default App;
