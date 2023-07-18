const express = require('express');
const router = express.Router();
const committer = require('./committer.controller');

router.post('/', committer.saveCommitter);
router.get('/', committer.getCommitter);
router.put('/', committer.updateCommitter);
router.delete('/', committer.deleteCommitter);

module.exports = router;