import React from "react";

const AllAlbums = ({ albums }) => {
  return (
    <div id="albums" className="row wrap">
      {albums.map((album) => {
        console.log(album);
        return (
          <div key={album.id} className="album">
            <a>
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
