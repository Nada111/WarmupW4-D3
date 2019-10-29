import React from 'react'

export default function Char(props) {
    return (
        <div className="card">
          <h5> {props.house.houseName.charName}</h5> 
          <img src={props.house.notableCharacter.imgSrc}></img>
         <h5>House: {props.house.houseName}</h5> 
        


            
        </div>
    )
}
