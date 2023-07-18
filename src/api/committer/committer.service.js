const Committer = require("../../model/committer");

const saveCommitter = async(req) => {
    try {
        const committer = new Committer(req.body);
        return committer.save();
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const updateCommitter = (req) => {
    try {
        return Committer.findByIdAndUpdate(req.id, req.body);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const deleteCommitter = (req) => {
    try {
        return Committer.findByIdAndDelete(req.id);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const getCommitter = () => {
    try {
        return Committer.find();
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

module.exports = {
    saveCommitter,
    updateCommitter,
    deleteCommitter,
    getCommitter
}