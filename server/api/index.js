const router = require('express').Router()
const { Album } = require('../db/index')

router.get('/albums', async (req, res, next) => {
    try {
        const albums = await Album.findAll()
        res.send(albums)
    } catch (err) {
        next(err)
    }
})

module.exports = router
