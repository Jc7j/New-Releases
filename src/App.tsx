import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
    // <div className="App">
    //   {!localStorage.getItem('spotifyToken') ? (
    //     <LoginPage />
    //   ) : (
    //     <h1>Hello World</h1>
    //   )}

    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          {localStorage.getItem('spotifyToken') ? (
            <Route path="/home" exact component={HomePage} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
