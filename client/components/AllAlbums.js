import React from "react";

const AllAlbums = ({ albums, selectAlbum }) => {
  return (
    <div id="albums" className="row wrap">
      {albums.map((album) => {
        return (
          <div key={album.id} className="album">
            <a onClick={() => selectAlbum(album)}>
              <img src={album.artWorkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AllAlbums;
