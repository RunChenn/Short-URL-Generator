const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    originURL: {
        type: String,
        required: true
    },
    shortenURL: {
        type: String,
        required: true
    },
    shortenId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('URL', urlSchema);