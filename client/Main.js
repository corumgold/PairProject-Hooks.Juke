import React from "react";
import Sidebar from "./components/Sidebar";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import SingleAlbum from "./components/SingleAlbum";
import Axios from "axios";

const Main = () => {
  const [albums, setAlbums] = React.useState([]);
  const [selectedAlbum, setSelectedAlbum] = React.useState({});
  const [currentSong, setCurrentSong] = React.useState('No song!');

  //SELECT ALBUM
  const selectAlbum = (album) => {
    const fetchAlbum = async () => {
      const res = await Axios.get(`/api/albums/${album.id}`);
      setSelectedAlbum(res.data);
    };
    fetchAlbum();
  };

  //UNSELECT ALBUM
  const unselectAlbum = () => {
    setSelectedAlbum({});
  };

  const playCurrentSong = (song) => {
    const thisSong = song
    console.log(thisSong.name)
    const audio = document.createElement("audio");
    audio.src = `${song.audioUrl}`;
    audio.load();
    audio.play();
    setCurrentSong(thisSong.name);
    console.log(currentSong);
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
      <Sidebar unselectAlbum={unselectAlbum} />
      <div className="container">
        {/* pass in our albums from state*/}
        {selectedAlbum.id ? (
          <SingleAlbum album={selectedAlbum} playSong={playCurrentSong} />
        ) : (
          <AllAlbums albums={albums} selectAlbum={selectAlbum} />
        )}
      </div>
      <Player />
    </div>
  );
};

export default Main;
