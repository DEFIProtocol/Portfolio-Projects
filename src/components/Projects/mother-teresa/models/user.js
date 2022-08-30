const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    btcWallet: {
        type: String,
    },
    ethWallet: {
        type: String,
    },
    solWallet: {
        type: String,
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);