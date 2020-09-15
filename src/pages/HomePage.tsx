import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Tabs } from "../components/Tabs";

import SideNavbar from "../components/SideNavbar";

import "../styles/HomePage.css";

interface HomePageProps {}

const s = new SpotifyWebApi();
s.setAccessToken(localStorage.getItem("spotifyToken"));

const HomePage: React.FC<HomePageProps> = () => {
  const [albumsList, setAlbumsList] = useState<any>([]);
  const [userName, setUserName] = useState<string>("");
  const [profileImage, setProfileImg] = useState<string>("");
  const [topArtists, setTopArtists] = useState<any>([]);
  const [topTracks, setTopTracks] = useState<any>([]);

  useEffect(() => {
    s.getNewReleases().then((res: any) => {
      if (res) setAlbumsList(res["albums"]["items"]);
    });

    s.getMyTopArtists().then((res: any) => {
      if (res) setTopArtists(res["items"]);
    });

    s.getMe().then((res: any) => {
      console.log(res);
      if (res) {
        setUserName(res["display_name"]);
        setProfileImg(res["images"][0]["url"]);
      }
    });

    s.getMyTopTracks().then((res: any) => {
      setTopTracks(res["items"]);
    });
  }, []);

  console.log(topTracks);
  return (
    <div className="HomePageContainer">
      <SideNavbar />
      <div className="SecondContainer">
        <div className="ProfileContainer">
          <img src={profileImage} alt="Profile Pic" />
          <div>
            <h3>Profile</h3>
            <h1>{userName}</h1>
          </div>
        </div>

        <div className="DisplayContainer">
          <Tabs>
            <div className="LabelContainer">
              <Tabs.Tab label="Top Artists">Top Artists</Tabs.Tab>
              <Tabs.Tab label="Top Tracks">Top Tracks</Tabs.Tab>
              <Tabs.Tab label="New Releases">New Releases</Tabs.Tab>
            </div>

            <div className="PanelContainer">
              <Tabs.Panel label="Top Artists">
                <div className="TopContainer">
                  {topArtists.map((obj: any) => {
                    return (
                      <a
                        className="IndividualContainer"
                        key={obj["id"]}
                        href={obj["uri"]}
                      >
                        <img
                          src={obj["images"][0]["url"]}
                          alt="Top Artist Pic"
                        />
                        <h4>{obj["name"]}</h4>
                      </a>
                    );
                  })}
                </div>
              </Tabs.Panel>
              <Tabs.Panel label="Top Tracks">
                <div className="TopContainer">
                  {topTracks.map((obj: any) => {
                    return (
                      <a
                        className="IndividualContainer"
                        key={obj["id"]}
                        href={obj["uri"]}
                      >
                        <img
                          src={obj["album"]["images"][0]["url"]}
                          alt="Album Pic"
                        />
                        <h4>{obj["name"]}</h4>
                      </a>
                    );
                  })}
                </div>
              </Tabs.Panel>
              <Tabs.Panel label="New Releases">hi</Tabs.Panel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
