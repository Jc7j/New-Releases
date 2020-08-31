import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './pages/Login';

import { getTokenFromResponse } from './utils';

const s = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    //@ts-ignore
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      setToken(_token);
    }
  }, [token]);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <h1>Hello world</h1>}
    </div>
  );
};

export default App;
