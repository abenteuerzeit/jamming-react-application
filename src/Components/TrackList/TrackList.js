import React, { Component } from 'react';
import Track  from '../Track/Track';
import './TrackList.css';
class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    renderListOfTracks = (tracks) => tracks.map( track => 
        <Track track={track}  key={track.id} onAdd={this.props.onAdd} onRemove={this.props.OnRemove} isRemoval={this.props.isRemoval} />
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