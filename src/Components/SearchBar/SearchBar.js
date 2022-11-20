import { React, Component } from "react";
import './SearchBar.css'


class SearchBar extends Component {
    constructors(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
};

export default SearchBar;