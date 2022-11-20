import React, { Component } from "react";
import './SearchBar.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'nu metal'
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search() {
        console.log(`searching for ${this.state.search}`);
        this.props.onSearch(this.state.search);
    }
    handleTermChange(event) {
        console.log(`onTermChange: ${event.target.value}`);
        this.setState({ search: event.target.value });
    }
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}
export default SearchBar;