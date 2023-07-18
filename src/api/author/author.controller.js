const service = require('./committer.service')

const saveAuthor = async(req, res) => {
    try {
        await service.getAuthor(req);
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

const updateAuthor = async(req, res) => {
    try {
        await service.updateAuthor(req);
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

const deleteAuthor = async(req, res) => {
    try {
        await service.deleteAuthor(req);
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

const getAuthor = async(req, res) => {
    try {
        var commiters = await service.getAuthor(req);
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
    saveAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthor
}