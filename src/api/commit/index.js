const express = require('express');
const router = express.Router();
const commit = require('./commit.controller');

router.post('/', commit.saveCommit);
router.get('/', commit.getCommit);
router.put('/', commit.updateCommit);
router.delete('/', commit.deleteCommit);

module.exports = router;