import React, { Component } from 'react';
import Track  from '../Track/Track';
import './TrackList.css';
class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: this.props.tracks,
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
    renderListOfTracks = (tracks) => tracks.map( track => 
        <Track track={track}  key={track.id} onAdd={this.addTrack} onRemove={this.removeTrack} isRemoval={this.props.isRemoval} />
        );
    render() {
        return (
            <div className="TrackList">   
            {this.renderListOfTracks(this.props.tracks)}       
            </div> 
        );
    }
}
export default TrackList;