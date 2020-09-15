import React from 'react';

import '../styles/SideNavbar.css';

const SideNavbar = () => {
  return (
    <div className="SideNavbarContainer">
      <div className="InnerContainer">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify Logo"
          className="SpotifyLogo"
        />
      </div>
    </div>
  );
};

export default SideNavbar;
