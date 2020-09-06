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
      <h1>New Releases</h1>
      <div className="NewReleasesContainer">
        {albumsList &&
          albumsList.map((obj: any) => {
            return (
              <div className="IndividualReleaseContainer">{obj['name']}</div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
