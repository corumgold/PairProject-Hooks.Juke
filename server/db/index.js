const Sequelize = require("sequelize");
const db = require("./db");
// require each of your models here...
const Artist = require("./artist");
const Album = require("./album");
const Song = require("./song");
// ...and give them some nice associations here!
Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Album);
Album.hasMany(Song);

Artist.hasMany(Song);
Song.belongsTo(Artist);

module.exports = {
  db,
  Artist,
  Album,
  Song,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
