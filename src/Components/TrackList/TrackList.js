import {React, Component} from 'react';
import {Track } from '../Track/Track';
import './TrackList.css';


export class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRemoval: this.props.isRemoval,
            onAdd: this.props.onAdd,
            onRemove: this.props.onRemove,
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }


    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map( track => 
                    <Track  
                        track = { track } 
                        name = { this.props.track.name } 
                        artist = { this.props.track.artist } 
                        album = { this.props.track.album } 
                        key = { track.id } 
                        onAdd = { this.props.onAdd }
                        onRemove = { this.props.onRemove }
                        isRemoval = { this.props.isRemoval }    
                    />
                )
                }
            </div> 
        );
    }
}

