const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	summary: String
});

const Book = mongoose.model('Book', bookSchema);

mongoose.connect(process.env.DB_URL, { dbName: "books" });

const isObjectIdValid = (id) => {
	return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
  	Book,
	isObjectIdValid
}