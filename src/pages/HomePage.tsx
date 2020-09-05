import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "../styles/HomePage.css";

interface HomePageProps {}

const s = new SpotifyWebApi();

const HomePage: React.FC<HomePageProps> = () => {
  let [albumsList, setAlbumsList] = useState<any>([]);

  useEffect(() => {
    s.setAccessToken(localStorage.getItem("spotifyToken"));

    s.getNewReleases().then((res: any) => {
      setAlbumsList(res["albums"]["items"]);
    });
  }, []);

  return (
    <div className="HomePageContainer">
      {albumsList &&
        albumsList.map((obj: any) => {
          return <p>{obj["name"]}</p>;
        })}
    </div>
  );
};

export default HomePage;
