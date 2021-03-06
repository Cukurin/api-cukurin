const express = require('express');
const router = express.Router();

const {
  getAllComments,
  addComment
} = require('../controllers/comment')

router.get('/', getAllComments)
router.post('/:id', addComment)

module.exports = router;