import {React, Component} from 'react';
import {Track } from './';
import './TrackList.css';


class TrackList extends Component {
    constructors(props) {
        super(props);
        this.state = {
            tracks: []
        };
    }

    render() {
        return (
            <div className="TrackList">
    {/* <!-- You will add a map method that renders a set of Track components  -->          */}
            </div> 
        );
    }
}

export default TrackList;