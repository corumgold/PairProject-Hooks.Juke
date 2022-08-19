import React from "react";

const AllAlbums = () => {
  return (
    <div id="albums" className="row wrap">
      <div className="album">
        <a>
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
        </a>
      </div>
    </div>
  );
};

export default AllAlbums;
