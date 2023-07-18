const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
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

const AuthorModel = mongoose.model('Author', authorSchema);

module.exports = AuthorModel;