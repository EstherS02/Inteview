const mongoose = require('mongoose');

const committerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});

const CommitterModel = mongoose.model('Committer', committerSchema);

module.exports = CommitterModel;