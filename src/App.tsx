import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { getTokenFromResponse } from './utils';

import './styles/App.css';

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
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" exact component={HomePage} />
          {/* {!localStorage.getItem('spotifyToken') &&
          window.location.href !== 'http://localhost:3000/' ? (
            <Redirect to="/" />
          ) : null} */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
