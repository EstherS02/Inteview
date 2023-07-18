const service = require('./committer.service')

const saveCommit = async(req, res) => {
    try {
        await service.getCommit(req);
        res.status(201).send({
            status: "Success",
            message: "Saved successfully"
        })
    } catch (e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        })
    }
}

const updateCommit = async(req, res) => {
    try {
        await service.updateCommit(req);
        res.status(201).send({
            status: "Success",
            message: "Updated successfully"
        })
    } catch (e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        })
    }
}

const deleteCommit = async(req, res) => {
    try {
        await service.deleteCommit(req);
        res.status(201).send({
            status: "Success",
            message: "deleted successfully"
        })
    } catch (e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        })
    }
}

const getCommit = async(req, res) => {
    try {
        var commiters = await service.getCommit(req);
        res.status(201).send({
            status: "Success",
            commiters
        })
    } catch (e) {
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