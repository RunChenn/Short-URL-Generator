const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || (process.env.VERCEL ? null : 'mongodb://127.0.0.1/URL-Shortener');

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI).catch(error => {
        console.error('mongodb connection error:', error.message);
    });
} else {
    console.warn('MONGODB_URI is not set. The home page can load, but URL shortening requires a database.');
}

const db = mongoose.connection;
db.on('error', () => {
    console.log('mongodb error!')
});
db.once('open', () => {
    console.log('mongodb connected!')
});
module.exports = db;
