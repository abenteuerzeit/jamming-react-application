import React, { Component } from 'react';
import Track  from '../Track/Track';
import './TrackList.css';

class TrackList extends Component {
    constructor(props) {
        super(props);
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
                {
                    this.props.tracks && this.props.tracks.map(track => {
                        return <Track 
                            track={track} 
                            key={track.id} 
                            onAdd={this.addTrack} 
                            onRemove={this.removeTrack} 
                            isRemoval={this.props.isRemoval} 
                        />
                    })  
                } 
                
            </div> 
        );
    }
}


export default TrackList;