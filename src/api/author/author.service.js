const Author = require("../../model/author");

const saveAuthor = async(req) => {
    try {
        const author = new Author(req.body);
        return author.save();
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const updateAuthor = (req) => {
    try {
        return Author.findByIdAndUpdate(req.id, req.body);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const deleteAuthor = (req) => {
    try {
        return Author.findByIdAndDelete(req.id);
    } catch(e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        }) 
    }
}

const getAuthor = () => {
    try {
        return Author.find();
    } catch(e) {
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