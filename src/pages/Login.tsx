import React from 'react';

import { accessUrl } from '../utils';

import '../styles/Login.css';

const Login = () => {
  return (
    <div className="Login">
      {/* <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Title and Logo"
      /> */}
      <button className="LoginLinkButton">
        <a className="LoginLinkATag" href={accessUrl}>
          LOGIN TO SPOTIFY
        </a>
      </button>
    </div>
  );
};

export default Login;
