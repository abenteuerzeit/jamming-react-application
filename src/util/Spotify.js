import { Component } from 'react';
import {CLIENT_ID, REDIRECT_URI, ENDPOINT } from '../util/Secrets';


let UserAccessToken = '';

const getAccessToken = () => {
    if (UserAccessToken) {
        return UserAccessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        UserAccessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => UserAccessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return UserAccessToken;
    } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
        window.location.assign(accessUrl);
    }
};

class Spotify extends Component {
    async search(term) {
        const uri = `https://api.spotify.com${ENDPOINT}&q=${term}`
        return await fetch(uri, { headers: {Authorization: `Bearer ${getAccessToken()}`}})
            .then( (response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();})
            .then( (jsonResponse) => {
                if (jsonResponse.tracks) {
                    return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }));
                }})
            .catch( (error) => {
                console.error("There has been a problem with the fetch operation: ", error.message);
            });
        }
}


export default Spotify;