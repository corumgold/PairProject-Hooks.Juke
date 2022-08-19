import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import SingleAlbum from "./components/SingleAlbum";
import Axios from "axios";

const Main = () => {
  const [albums, setAlbums] = React.useState([]);
  const [selectedAlbum, setSelectedAlbum] = React.useState([]);

  const selectAlbum = (album) => {
    const fetchAlbum = async () => {
      const res = await Axios.get(`/api/albums/${album.id}`);
      setSelectedAlbum(res.data);
    };
    fetchAlbum();
  };

  // fetch our albums on page load!
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const res = await Axios.get("/api/albums");
      setAlbums(res.data);
    };
    fetchAlbums();
    // the [] prevents infinite loop!
  }, []);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        {/* pass in our albums from state*/}
        {selectedAlbum.id ? (
          <SingleAlbum album={selectedAlbum} />
        ) : (
          <AllAlbums albums={albums} selectAlbum={selectAlbum} />
        )}
      </div>
      <Player />
    </div>
  );
};

export default Main;
