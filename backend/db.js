const mongoose = require ('mongoose')

function dbConnection() {
    mongoose.connect('mongodb://localhost:27017/Bookstore');
    const bookSchema = mongoose.Schema({
        Title: String,
        ISBN : Number,
        Author: String,
        Genre: String
    });
    const Book = mongoose.model('Book', bookSchema)
    return Book
}

module.exports = dbConnection;