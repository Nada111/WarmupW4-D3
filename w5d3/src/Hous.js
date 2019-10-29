import React from 'react'

export default function Hous(props) {
    return (
        <div className="card">
          <h5> {props.house.houseName}</h5> 
          <img src={props.house.imgSrc}></img>
         <h3>Founder: {props.house.founder}</h3> 
         <h3>Element: {props.house.element}</h3> 


            
        </div>
    )
}
