import { Component } from "react";
import './card.style.css';

const Card = ({monsterDetails}) =>{
    const {name, email, id} = monsterDetails;

    return(
        <div  className="card-container">
            <img src={`https://robohash.org/${id}?set=set2`} alt=""></img>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;