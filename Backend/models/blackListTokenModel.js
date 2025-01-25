const mongoose = require('mongoose');


const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now,
        expires: 86400        //24hrs in seconds
    }
});

module.exports = mongoose.model('blacklistToken', blackListTokenSchema);