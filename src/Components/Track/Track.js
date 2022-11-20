import {React, Component} from 'react';
import {TrackList} from './';
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: this.props.track
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>;
        } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>;
        }
    }

    addTrack() {
        this.props.onAdd(this.state.track);
    }

    removeTrack() {
        this.props.onRemove(this.state.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.state.track.name}</h3>
                    <p>{this.state.track.artist} | {this.state.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;