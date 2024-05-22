import { Component } from "react";
import './search-box.styles.css'

const SearchBox = (props) =>{
    console.log({props});
    return(
        <div>
            <input placeholder="Search monster" className="search-box" type="search" onChange={props.onChangeHandler}></input>
        </div>
    )
}

export default SearchBox