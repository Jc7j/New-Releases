import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import '../styles/HomePage.css';

interface HomePageProps {}

const s = new SpotifyWebApi();

const HomePage: React.FC<HomePageProps> = () => {
  useEffect(() => {
    s.setAccessToken(localStorage.getItem('spotifyToken'));
    // s.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response: any) =>
    //   console.log(response)
    // );
    // s.getMe().then((response: any) => {
    //   console.log(response);
    // });
  });
  return <div className="HomePageContainer">hello</div>;
};

export default HomePage;
