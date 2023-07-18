require('dotenv').config();
require('./db/mongoose');
const express = require("express");
const app = express();
const route = require('./route');
const Commit = require('./model/commit');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get("/repositories/:ownerId/:repository/commits/:commitId/diff", async (req, res) => {
    try {
        const {
            ownerId,
            repository,
            commitId
        } = req.params;

        if (!ownerId || !repository || !commitId) {
            res.status(400).send({
                status: "Error",
                message: "Required Fields are missing"
            })
        }

        const commit = await Commit.findOne({
            authorId: ownerId, 
            _id: commitId
        })

        res.status(200).send(commit);
    } catch (e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        })
    }
})

app.get("/repositories/:ownerId/:repository/commits/:commitId", async (req, res) => {
    try {
        const {
            ownerId,
            repository,
            commitId
        } = req.params;

        if (!ownerId || !repository || !commitId) {
            res.status(400).send({
                status: "Error",
                message: "Required Fields are missing"
            })
        }

        const commit = await Commit.aggregate([
            {
                "$match": {
                    "_id": commitId
                }
            },
            {
                "$lookup": {
                    "from": "authors",
                    "localField": "authorId",
                    "foreignField": "_id",
                    "as": "author"
                }
            },
            {
                "$lookup": {
                    "from": "committers",
                    "localField": "committerId",
                    "foreignField": "_id",
                    "as": "committer"
                }
            },
            {
                $project: {
                    _id: 1,
                    message: 1,
                    "contact.author.name": 1,
                    "contact.author.date": 1,
                    "contact.author.email": 1,
                    "contact.committer.name": 1,
                    "contact.committer.date": 1,
                    "contact.committer.email": 1,
                }
            }
        ]);

        res.status(200).send(commit);

    } catch (e) {
        res.status(500).send({
            status: "Error",
            message: "Internal server error"
        })
    }
})

route.appRoute(app);

app.listen(process.env.PORT || 5000, () => {
    console.log("The server is up on port: 5000")
})