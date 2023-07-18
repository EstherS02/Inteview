const Commit = require("../../model/commit");

const saveCommit = async(req) => {
    try {
        const commit = new Commit(req.body);
        return commit.save();
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const updateCommit = (req) => {
    try {
        return Commit.findByIdAndUpdate(req.id, req.body);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const deleteCommit = (req) => {
    try {
        return Commit.findByIdAndDelete(req.id);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const getCommit = () => {
    try {
        return Commit.find();
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

module.exports = {
    saveCommit,
    updateCommit,
    deleteCommit,
    getCommit
}