import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import SingleAlbum from "./components/SingleAlbum";
import Axios from "axios";

const Main = () => {
  const [albums, setAlbums] = React.useState([]);
  let dummyAlbum = {
    id: 3,
    name: "Chain React-ion",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
    songs: [
      {
        id: 13,
        name: "Set Some State",
        audioUrl:
          "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
        genre: "Instrumental",
        albumId: 2,
        artistId: 1,
      },
      {
        id: 11,
        name: "I just state myself",
        audioUrl:
          "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
        genre: "Grunge",
        albumId: 2,
        artistId: 1,
      },
    ],
  };

  const [selectedAlbum, setSelectedAlbum] = React.useState(dummyAlbum);

  const selectAlbum = () => {};

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
          <AllAlbums albums={albums} />
        )}
      </div>
      <Player />
    </div>
  );
};

export default Main;
