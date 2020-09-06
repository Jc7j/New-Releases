import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import '../styles/HomePage.css';

interface HomePageProps {}

const s = new SpotifyWebApi();

const HomePage: React.FC<HomePageProps> = () => {
  let [albumsList, setAlbumsList] = useState<any>([]);

  useEffect(() => {
    s.setAccessToken(localStorage.getItem('spotifyToken'));

    s.getNewReleases().then((res: any) => {
      setAlbumsList(res['albums']['items']);
    });
  }, []);
  s.getNewReleases().then((res: any) => {
    console.log(res['albums']['items']);
  });
  return (
    <div className="HomePageContainer">
      <h1>New Releases on Spotify!</h1>
      <div className="NewReleasesContainer">
        {albumsList &&
          albumsList.map((obj: any) => {
            return (
              <div className="IndividualReleaseContainer">
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
