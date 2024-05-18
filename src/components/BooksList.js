import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function BooksList()
{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fecthBooks();
    },[] );
    const fecthBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books/getBooksData');
            setBooks(response.data);
        }
        catch(error)
        {
            console.error(error)
            console.log("error on client side whilst fetching books' data")
        }
    }
    return (
        <div>
            <h2>
                Books' List
            </h2>
            <ul>
            {
                books.map ((book,index) => (
                    <li key = {index}>
                        <strong>ISBN: </strong> {book.ISBN} &nbsp;
                        <strong>Title: </strong> {book.Title} &nbsp;
                        <strong>Author: </strong> {book.Author} &nbsp;
                        <strong>Genre: </strong> {book.Genre} &nbsp;
                    </li>
                ))
            }
            </ul>
        </div>
    );  
}