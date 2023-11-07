const books = require('../services/books.service');

async function getAll(req, res, next) {
    try {
        res.json(await books.getAllBooks(req.query.page));
    } catch (err) {
        console.error('Error while getting books', err.message);
        next(err);
    }
}

async function get(req, res, next) {
    try {
        const book = await books.getBook(req.params.id);

        if (book) {
            res.json(book);   
        } else {
            res.status(404).json({'message': 'Book with the given ID not found'});
        }
    } catch (err) {
        console.error('Error while getting books', err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const {title, author, summary} = req.body;
        // console.log(title, author, summary);
        res.json(await books.addBook(title, author, summary));
    } catch (err) {
        console.error('Error while adding book', err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const id = req.params.id;
        const {title, author, summary} = req.body;
        const book = await books.updateBook(id, title, author, summary);
        if (book) {
            res.json(book);   
        } else {
            res.status(404).json({'message': 'Book with the given ID not found'});
        }
    } catch (err) {
        console.error('Error while updating book', err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        const result = await books.deleteBook(req.params.id);

        if (result) {
            res.json({'message': 'Book deleted successfully'});
        } else {
            res.status(404).json({'message': 'Book with the given ID not found'});
        }
    } catch (err) {
        console.error('Error while deleting book', err.message);
        next(err);
    }
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};