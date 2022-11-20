import {React, Component} from 'react';
import {TrackList} from './';
import './SearchResults.css';


class SearchResults extends Component {
    render() {        
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        );
    }
}

export default SearchResults;

