import {CLIENT_ID, REDIRECT_URI } from '../util/Secrets';

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessUrl;
        }
    }, 
    async search(term) {
        const accessToken = Spotify.getAccessToken();
        const options = { headers: { Authorization: `Bearer ${accessToken}` } }
        const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        return await fetch(searchUrl, options)
            .then(response =>  response.json())
            .then(responJson => 
                !responJson.tracks 
                    ? [] 
                    : responJson.tracks.items
                        .map(track => ({
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            album: track.album.name,
                            uri: track.uri 
                            })
                        )
            );       
    }
}


export default Spotify;