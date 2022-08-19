const Sequelize = require("sequelize");
const db = require("./db");
// require each of your models here...
const Artist = require("./artist");
const Album = require("./album");
// ...and give them some nice associations here!
Album.belongsTo(Artist);
Artist.hasMany(Album);

module.exports = {
  db,
  Artist,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
