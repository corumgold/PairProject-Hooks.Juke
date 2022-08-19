import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";

const Main = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        <AllAlbums />
      </div>
      <Player />
    </div>
  );
};

export default Main;
