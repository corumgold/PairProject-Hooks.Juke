import React from "react";

const Sidebar = ({ unselectAlbum }) => {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <a onClick={() => unselectAlbum()}>ALBUMS</a>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;
