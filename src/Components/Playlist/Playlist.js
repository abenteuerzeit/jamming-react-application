import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";


class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName : "New Playlist",
            playlistTracks : []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
            <TrackList 
                tracks={this.props.playlistTracks} 
                onRemove={this.props.onRemove}
                isRemoval={true} 
                onChange={this.handleNameChange}        
                />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        );
    }
}

export default Playlist;