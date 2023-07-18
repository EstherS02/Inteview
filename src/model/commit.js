const mongoose = require('mongoose');

const committerSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: 'Author'
    },
    committerId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: 'Committer'
    },
    message: {
        type: String,
        require: true,
    },
    changes: {
        type: Array,
        changeKind: {
            type: String,
            enum: ["MODIFIED", "ADDED", "DELETED"]
        },
        headFile: {
            path: String
        },
        baseFile: {
            path: String
        },
        hunks: {
            type: Array,
            header: {
                type: Array,
                lines: {
                    type: Array,
                    baseLineNumber : Number,
                    headLineNumber : Number,
                    content: String
                }
            }
        }
    }
    
});

const CommitterModel = mongoose.model('Committer', committerSchema);

module.exports = CommitterModel;