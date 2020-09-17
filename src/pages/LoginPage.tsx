import React from 'react';

import { accessUrl } from '../utils';

import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="LoginContainer">
      <h1>Spotify Profile </h1>
      <button className="LoginLinkButton">
        <a className="LoginLinkATag" href={accessUrl}>
          LOGIN TO SPOTI
        </a>
      </button>
    </div>
  );
};

export default LoginPage;
