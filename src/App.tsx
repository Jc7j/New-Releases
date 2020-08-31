import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './pages/Login';

import { getTokenFromResponse } from './utils';

const s = new SpotifyWebApi();

const App = () => {
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    //@ts-ignore
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      localStorage.setItem('spotifyToken', _token);
    }
  });

  return (
    <div className="App">
      {!localStorage.getItem('spotifyToken') ? <Login /> : <h1>Hello World</h1>}
    </div>
  );
};

export default App;
