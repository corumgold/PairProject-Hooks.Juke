import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import Axios from "axios";

const Main = () => {
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    const fetchAlbums = async () => {
      const res = await Axios.get("/api/albums");
      console.log(res.data);
      setAlbums(res.data);
    };
    fetchAlbums();
  }, []);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        {/* pass in our albums from state*/}
        <AllAlbums albums={albums} />
      </div>
      <Player />
    </div>
  );
};

export default Main;
