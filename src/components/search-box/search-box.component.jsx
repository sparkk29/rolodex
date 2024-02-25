import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{

    render(){
        return(
            <div>
                <input placeholder="Search monster" className="search-box" type="search" onChange={this.props.onChangeHandler}></input>
            </div>
        )
    }
}

export default SearchBox