import React from "react";

const SingleAlbum = ({ album, playSong }) => {
    
  return (
    <div id="single-album" className="column">
      <div className="album">
        <a>
          <img src={album.artWorkUrl} />
          <p>{album.name}</p>
          <small>{album.artist.name}</small>
        </a>
      </div>
      <table id="songs">
        <tbody>
          <tr className="gray">
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>
          {album.songs.map((song) => {
            return (
              <tr key={song.id}>
                <td>
                  <i
                    className="fa fa-play-circle"
                    onClick={() => playSong(song)}
                  />
                </td>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td>{album.artist.name}</td>
                <td>{song.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleAlbum;
