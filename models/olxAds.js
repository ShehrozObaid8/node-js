const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const olxAdsSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    description: String,
    Price: {
        type: Number,
        required: true,
        min: 100
    },
    image_url: {
        type: String,
    },
});

const olxAds = mongoose.model('olx ads', olxAdsSchema);

module.exports = olxAds;

