const express = require('express');
const router = express.Router();
const author = require('./author.controller');

router.post('/', author.saveAuthor);
router.get('/', author.getAuthor);
router.put('/', author.updateAuthor);
router.delete('/', author.deleteAuthor);

module.exports = router;