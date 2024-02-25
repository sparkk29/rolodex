import { Component } from "react";
import './card.style.css';

class Card extends Component{

    render(){
        console.log("card props :: ", this.props.monsterDetails);
        const {name, email, id} = this.props.monsterDetails;

        return(
            <div key={id} className="card-container">
                <img src={`https://robohash.org/${id}?set=set2`} alt=""></img>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;