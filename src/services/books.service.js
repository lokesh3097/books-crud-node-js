const db = require('./db.service');

async function getAllBooks(page) {
    const limitPerPage = 10;
    const offset = (page-1)*limitPerPage;

    const books = await db.Book.find({}).skip(offset).limit(limitPerPage);

    // console.log("BOOKS: ", books);

    let resObj = {
        books: books,
        currentPage: page
    }

    return resObj;
}

async function getBook(id) {
    if (!db.isObjectIdValid(id)) {
        return null;
    }

    const book = await db.Book.findById({_id: id});

    return book;
}

async function addBook(title, author, summary) {
    const newBook = new db.Book({title, author, summary});
    await newBook.save();

    return {
        message: "Book added successfully",
        id: newBook.id
    };
}

async function updateBook(id, title, author, summary) {
    if (!db.isObjectIdValid(id)) {
        return null;
    }

    const book = await db.Book.findByIdAndUpdate({_id: id}, {title, author, summary}, { new: true });

    return book;
}

async function deleteBook(id) {
    if (!db.isObjectIdValid(id)) {
        return null;
    }
    const result = await db.Book.findOneAndDelete({_id: id});

    return result;
}

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
}