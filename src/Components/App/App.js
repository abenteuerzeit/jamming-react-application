import {React, Component} from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Playlist} from '../Playlist/Playlist.js';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchResults: [
          {
            name: 'name1',
            artist: 'artist1',
            album: 'album1',
            id: 1
          },
          {
            name: 'name2',
            artist: 'artist2',
            album: 'album2',
            id: 2
          },
          {
            name: 'name3',
            artist: 'artist3',
            album: 'album3',
            id: 3
          }
        ],
        playlistName: 'My Playlist',
        playlistTracks: [
          {
            name: 'name4',
            artist: 'artist4',
            album: 'album4',
            id: 4
          },
          {
            name: 'name5',
            artist: 'artist5',
            album: 'album5',
            id: 5
          },
          {
            name: 'name6',
            artist: 'artist6',
            album: 'album6',
            id: 6
          }
        ]
      };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
    }

    addTrack(track) {
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
      this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: this.state.playlistTracks });
    }

    removeTrack(track) {
      this.setState({
        playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
      });
    }

    updatePlaylistName(name) {
      this.setState({ playlistName: name });
    }

    savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
      console.log(term);
    }

    render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={ this.props.SearchResults } />
          <Playlist />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
