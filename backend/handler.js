const dbConnection = require('./db.js');
const express = require('express');
const router = express.Router();

// Get the Book model from the database connection
const Book = dbConnection(); // Assuming this returns a Mongoose model

// Get all books
router.get('/books/getBooksData', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
        console.log('Books fetched in handler');
        console.log(books);
    } catch (err) {
        res.status(400).json({ message: 'Error while fetching books...' });
    }
});

// Add a new book
router.post('/books/addABook', async (req, res) => {
    try {
        const { Title, ISBN, Author, Genre } = req.body;
        console.log('Received data:', { Title, ISBN, Author, Genre });

        if (!Title || !ISBN || !Author || !Genre) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newBook = new Book({ Title, ISBN, Author, Genre });
        await newBook.save();
        res.status(200).json({ message: 'Book successfully added to the database' });
    } catch (err) {
        console.error('Error while posting the book to the database:', err);
        res.status(400).json({ message: 'Error while posting the book to the database' });
    }
});

module.exports = router;
