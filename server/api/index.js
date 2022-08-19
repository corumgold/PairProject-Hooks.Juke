const router = require("express").Router();
const { Album, Song, Artist } = require("../db/index");

router.get("/albums", async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    res.send(albums);
  } catch (err) {
    next(err);
  }
});

router.get("/albums/:albumId", async (req, res, next) => {
  try {
    const album = await Album.findOne({
      where: {
        id: req.params.albumId,
      },
      include: [Artist, Song],
    });
    res.send(album);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
