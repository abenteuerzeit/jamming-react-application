import {React, Component} from 'react';
import {Track } from '../Track/Track';
import './TrackList.css';


export class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        };
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map( track => <Track track={track} key={track.id} />)}
            </div> 
        );
    }
}

