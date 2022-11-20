import {React, Component} from 'react';
import './Track.css';

export class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: this.addTrack,
            track : this.props.track,
            name: this.props.track.name,
            artist: this.props.track.artist,
            album: this.props.track.album,
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>;
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>;
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
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

