import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";

const Main = () => {
  let dummyAlbums = [
    {
      id: 1,
      name: "No Dummy",
      artworkUrl: "default-album.jpg",
      artistId: 1,
      artist: {
        id: 1,
        name: "The Crash Test Dummies",
      },
    },
    {
      id: 2,
      name: "I React to State",
      artworkUrl: "default-album.jpg",
      artistId: 1,
      artist: {
        id: 1,
        name: "The Crash Test Dummies",
      },
    },
  ];

  const [albums, setAlbums] = React.useState(dummyAlbums);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        <AllAlbums albums={albums} />
      </div>
      <Player />
    </div>
  );
};

export default Main;
