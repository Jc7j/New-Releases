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

  useEffect(() => {
    s.getNewReleases().then((res: any) => {
      if (res) setAlbumsList(res["albums"]["items"]);
    });

    s.getMyTopArtists().then((res: any) => {
      console.log(res);
    });

    s.getMe().then((res: any) => {
      console.log(res);
      if (res) {
        setUserName(res["display_name"]);
        setProfileImg(res["images"][0]["url"]);
      }
    });
  }, []);

  // const onClickHandler = () => {
  //   window.location.reload(true);
  // };

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
            </div>
            <Tabs.Panel label="Top Artists">hi</Tabs.Panel>
            <Tabs.Panel label="Top Tracks">Helo</Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// {
//    <h1>Hi {userName}! Here are some new releases on Spotify:</h1>
//   <button className="HomePageButton" onClick={onClickHandle}>
//   Reload if New Releases are not shown
// </button>
// <div className="NewReleasesContainer">
//   {albumsList &&
//     albumsList.map((obj: any) => {
//       return (
//         <div className="IndividualReleaseContainer" key={obj['id']}>
//           <div className="ReleaseTitle">
//             <h3>
//               {obj['name']} by <i>{obj['artists'][0]['name']}</i>
//             </h3>
//             <p>Release Date: {obj['release_date']}</p>
//           </div>
//           <a href={obj['uri']}>
//             <img
//               src={obj['images'][0]['url']}
//               alt="Album Pic"
//               className="ImageContainer"
//             />
//           </a>
//         </div>
//       );
//     })}
// </div>
// }
