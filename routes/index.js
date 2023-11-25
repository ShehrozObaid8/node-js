const express = require('express');
const router = express.Router();

router.use('/ads', require('./ads'));
router.use('/olxAds', require('./olxAds'));
// router.use('/user')
// Remove the following line, as it might interfere with the '/:id' route
// router.use('/:id', require('./olxAds'));

module.exports = router;