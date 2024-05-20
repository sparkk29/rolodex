
import { Component } from "react";

import './card-list.style.css';

import Card from '../card-component/card.component'

// class CardList extends Component{

//     render(){
//     const {monsters} = this.props;

//     console.log("render");

//     console.log("monsters", monsters);

//         return (
            
//             <div className="card-list">
//                 {
//                     monsters.map((e)=>{
//                        return <Card monsterDetails={e} key={e.id}/>
//                     })
//                 }
//         </div>
//         )
//     }
// }

// export default CardList;




///  functional card-list component

const CardList = ({monsters}) => { // props is the object that is passed from parent component, forwardedRef is the ref that is passed from parent component

    // you can use directly this.props as props from params as per old react docs
    // const {monsters} = props; 
    // but we are going to destructure it in params itself

    return(
        <div className="card-list">
            { 
                monsters.map((e)=>{
                    return <Card monsterDetails={e} key={e.id}></Card>
                })
            }
        </div>
    )
}

export default CardList;