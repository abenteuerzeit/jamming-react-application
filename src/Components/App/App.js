import { Component} from 'react';
import './App.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults.js';
import Playlist from '../../Components/Playlist/Playlist.js';
import Spotify from '../../util/Spotify';

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
      const tracks = this.state.playlistTracks;
      if (tracks.find(t => t.id === track.id)) {
        return;
      }
      this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: this.state.playlistTracks });
    }
    removeTrack(track) {
      const tracks = this.state.playlistTracks;
        this.setState({
          playlistTracks: tracks.filter(t => t.id !== track.id)
        });
      }
    updatePlaylistName(name) {
      this.setState({ playlistName: name });
    }
    savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }
    async search(term) {
      // TODO: Add search functionality 
      console.log(term);
      console.warn('Search functionality not yet fully implemented')
      await Spotify.search(term).then(searchResults => {
        this.setState({ searchResults: searchResults });
      });
    }
    render() {return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>      
      <div className="App">
        <SearchBar onSearch={this.search} />   
        <div className="App-playlist">
          <SearchResults searchResults={ this.state.searchResults } onAdd={this.addTrack} /> 
          <Playlist playlistName={this.state.playlistName}  playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist }/>
        </div>
      </div> 
    </div>
    );
  }
}

export default App;