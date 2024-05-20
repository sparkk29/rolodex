import {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


import CardList from './components/card-list/card-list.component';


const App = () =>{

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        (res)=>{
          return res.json()
        }
      ).then(
        (users)=>{
          console.log(users);
          setMonsters(users);
        }
      )
  }, [])

  
  // [value, setValue]
  const [searchField, setSearchField] = useState('');

  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  }

  const filteredList = monsters.filter((e)=> {
    return e.name.toLowerCase().includes(searchField.toLowerCase())
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className='main-title'> Card List</h1>

          <SearchBox onChangeHandler={onSearchChange}/>
          <CardList monsters={filteredList}/>

        </header>
      </div>
    );
  
  
}

//   class App extends Component {

//     constructor(){
//       super();

//       this.state = {
//         monsters:[],
//         searchTerm:''
//       }
//     }

//     componentDidMount(){
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(
//         (res)=>{
//           return res.json()
//         }
//       ).then(
//         (users)=>{
//           console.log(users);
//           this.setState(
//             ()=>{
//               return {monsters : users, originalMonsters: users}
//             }
//           )
//         }
//       ).then(
//         ()=>{
//          console.log(this.state.monsters);
//         } 
//        )
      
//     }

//     onSearchChange = (event)=>{ 
//       console.log(event.target.value);
        
//       this.setState(()=>{return {searchTerm: event.target.value}})
//       }

//     render(){


//       const { monsters, searchTerm} = this.state;
//       const {onSearchChange} = this
//       const filteredList = monsters.filter((e)=> {
//         return e.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
//       })

//       return (
//         <div className="App">
//           <header className="App-header">

//             {/* <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"  
//               target="_blank"
//               rel="noopener noreferrer" 
//             >
//               Learn React
//             </a> */} 

//             {/* <p>Hi {this.state.name.firstName} {this.state.name.lastName}</p> */}


//             {/* <input type='search' onChange={onSearchChange}></input> */}
//             <h1 className='main-title'> Card List</h1>

//             <SearchBox onChangeHandler={onSearchChange}/>
//             <CardList monsters={filteredList}/>

//             {/* <ul> Users
//               {
//                 filteredList.map((element)=>{
//                   return <li key={element.id}>{element.name}</li>;
//                 })
//               }
//               </ul> */}

//             <button onClick={()=>{
//               {/* this.setState({name: {firstaName: 'Godtier'}})
//               console.log(this.state); */}

//               this.setState((state, props)=>{ return {name: {firstName: 'Godtier'}}}, ()=>{ console.log(this.state);})
//               }}> Change Name</button>
//           </header>
//         </div>
//       );
//     }
  
// }

export default App;
