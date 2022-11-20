import { React, Component } from "react";
import { TrackList } from "../TrackList/TrackList";
import "./Playlist.css";


export class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName : "New Playlist",
            playlistTracks : []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }


 
    
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
            <TrackList tracks={this.props.playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        );
    }
}

