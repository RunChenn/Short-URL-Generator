const express = require('express');
const validUrl = require('valid-url');
const getShortUrl = require('../../tools/getShortUrl');

const router = express.Router();
const Url = require('../../models/shortUrl');

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/', async (req, res) => {
    const originURL = req.body.originUrl.trim();
    let isValidUrl = validUrl.isUri(originURL);
    let shortenURL

    // verify url
    if (!isValidUrl) {
        const error = "error";
        res.render('index', { error })
        return;
    }

    const dbOriginUrl = await Url.findOne({ originURL }).lean();

    if (dbOriginUrl) {
        shortenURL = dbOriginUrl.shortenURL;
        return res.render('index', { shortenURL, originURL })
    }

    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const shortenId = getShortUrl();

    shortenURL = fullUrl + shortenId;

    return Url.create({ originURL, shortenURL, shortenId })
        .then(() => res.render('index', { originURL, shortenURL }))
        .catch(err => console.error(err));

});

router.get('/:id', (req, res) => {
    const shortenId = req.params.id
    Url.find({ shortenId })
        .lean()
        .then(resUrl => {
            if (resUrl.length === 0)  return res.redirect('/');
            res.redirect(resUrl.originURL)
        })
        .catch(err => console.error(err))
})

module.exports = router;