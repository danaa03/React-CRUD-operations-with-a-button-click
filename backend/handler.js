const dbConnection = require('./db.js')
const express = require('express')
const router = express.Router();

//get router handler
const book = dbConnection()

router.get('/books/getBooksData', async (req,res) => {
    try {
        const books = await book.find({})
        res.json(books)
        console.log('books fetched in handler')
        console.log(books)
    } catch (err)    {
        res.status(400).json({message: 'error while fetching books...'})
    }
})

router.post('/books/addABook', async (req,res)=>{
    try {
        const newBook = book({Title,ISBN,Author,Genre})
        await newBook.save()
        res.status(200).json({message: 'book successfully added to the database'})
    } catch (err)
    {
        console.log(err)
        res.status(400).json({message: 'error while posting the book to the database'})
    }
})

module.exports = router