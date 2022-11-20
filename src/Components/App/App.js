import {React, Component} from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Playlist} from '../Playlist/Playlist.js';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchResults : [
          {
            name : 'Malarcky',
            artist : 'Joe Biden',
            album : 'The Best of Joe Biden',
            id : 1
          },
          {
            name : 'Across the Golden Fields',
            artist : 'Foxy Shazam',
            album : 'The Flamingo Trigger',
            id : 2
          },
          {
            name : 'Tocixity',
            artist : 'System of a Down',
            album : 'Toxicity',
            id: 3
          }
        ],
        playlistName: 'Intense Music Playlist',
        playlistTracks : [
          {
            name: 'Nookie',
            artist: 'Limb Bizkit',
            album: 'Significant Other',
            id: 4
          },
          {
            name: 'Turbo Killer',
            artist: 'Carpenter Brut',
            album: 'Trilogy',
            id: 5
          },
          {
            name: 'Let the Bodies Hit the Floor',
            artist: 'Drowning Pool',
            album: 'Nu Metal Various Artists Collection',
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
          <SearchResults searchResults={ this.state.SearchResults } />
          <Playlist playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
