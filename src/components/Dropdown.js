import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function BooksList()
{
    const [books, setBooks] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(()=>{
        fetchBooks();
    },[] );
    const fetchBooks = async () => {
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
    function filterByGenre () {
        const bygenre = [...books].filter ((book) => (book.Genre === selectedOption))
        return bygenre;
    }
    const bygenre = filterByGenre();

    const handleChange = (event) => {
        setSelectedOption(event.target.value)
    }
    return (
        <div>
            <h2>
                Dropdown List
            </h2>
            <ul>
               <select onChange = {handleChange}>
                    <option value ="">Select</option>
                    <option value ="Dystopian Fiction">Dystopian Fiction</option>
                    <option value ="Romance">Romance</option>
                    <option value ="Classic Literature">Classic Lit</option>
                    <option value ="Fiction">Fiction</option>
                    <option value ="Fantasy">Fantasy</option>
               </select>
            </ul>
            <ul>
                {filterByGenre().length > 0 ? (
                    filterByGenre().map((book, index) => (
                    <li key={index}>
                        <strong>ISBN: </strong> {book.ISBN} &nbsp;
                        <strong>Title: </strong> {book.Title} &nbsp;
                        <strong>Author: </strong> {book.Author} &nbsp;
                        <strong>Genre: </strong> {book.Genre} &nbsp;
                    </li>
                    ))
                ) : (
                    <li>No books found for the selected genre</li>
                )}
            </ul>
        </div>
    );  
}