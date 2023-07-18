const service = require('./committer.service')

const saveCommitter = async(req, res) => {
    try {
        await service.getCommitter(req);
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

const updateCommitter = async(req, res) => {
    try {
        await service.updateCommitter(req);
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

const deleteCommitter = async(req, res) => {
    try {
        await service.deleteCommitter(req);
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

const getCommitter = async(req, res) => {
    try {
        var commiters = await service.getCommitter(req);
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
    saveCommitter,
    updateCommitter,
    deleteCommitter,
    getCommitter
}