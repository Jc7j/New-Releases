import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import '../styles/HomePage.css';

interface HomePageProps {}

const s = new SpotifyWebApi();
s.setAccessToken(localStorage.getItem('spotifyToken'));

const HomePage: React.FC<HomePageProps> = () => {
  const [albumsList, setAlbumsList] = useState<any>([]);
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    s.getNewReleases().then((res: any) => {
      if (res) setAlbumsList(res['albums']['items']);
    });
    s.getMe().then((res: any) => {
      if (res) setUserName(res['display_name']);
    });
  }, []);

  return (
    <div className="HomePageContainer">
      <h1>Hi {userName}! Here are some new releases on Spotify:</h1>
      <div className="NewReleasesContainer">
        {albumsList &&
          albumsList.map((obj: any) => {
            return (
              <div className="IndividualReleaseContainer" key={obj['id']}>
                <div className="ReleaseTitle">
                  <h3>
                    {obj['name']} by <i>{obj['artists'][0]['name']}</i>
                  </h3>
                  <p>Release Date: {obj['release_date']}</p>
                </div>
                <a href={obj['uri']}>
                  <img
                    src={obj['images'][0]['url']}
                    alt="Album Pic"
                    className="ImageContainer"
                  />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
