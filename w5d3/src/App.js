import React, { Component } from "react";
import './styles.css';
import houses from './Houses.js'
import Hous from './Hous.js'
import Char from './Char.js'



class App extends Component {

  render(){
    console.log(houses)
  return (
    <div>
      <h1> House</h1>
        {houses.map(ele=> <Hous house={ele}/>)}
        <h1> Characers</h1>
        {houses.map(ele=> <Char house={ele}/>)}
    </div>
  )
  }
}

export default App;
