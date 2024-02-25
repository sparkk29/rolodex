
import { Component } from "react";

import './card-list.style.css';

import Card from '../card-component/card.component'

class CardList extends Component{

    render(){
    const {monsters} = this.props;

    console.log("render");

    console.log("monsters", monsters);

        return (
            
            <div className="card-list">
                {
                    monsters.map((e)=>{
                       return <Card monsterDetails={e}/>
                    })
                }
        </div>
        )
    }
}

export default CardList;