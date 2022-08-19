import React from "react";

const AllAlbums = ({ albums }) => {
  return (
    <div id="albums" className="row wrap">
      {albums.map((album) => {
        return (
          <div key={album.id} className="album">
            <a>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          </div>
        );
      })}
      {/* <a>
          <img src="default-album.jpg" />
          <p>ALBUM 1</p>
          <small>Artist Name</small>
        </a>
      </div>
      <div className="album">
        <a>
          <img src="default-album.jpg" />
          <p>ALBUM 2</p>
          <small>Artist Name</small>
        </a> */}
    </div>
  );
};

export default AllAlbums;
