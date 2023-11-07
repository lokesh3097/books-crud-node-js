const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

router.get('/', booksController.getAll);

router.get('/:id', booksController.get);

router.post('/', booksController.create);

router.put('/:id', booksController.update);

router.delete('/:id', booksController.remove);

module.exports = router;