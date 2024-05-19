import React, { useState } from 'react';
import axios from 'axios';

export default function AddBookForm() {
    const [ISBN, setISBN] = useState('');
    const [Title, setTitle] = useState('');
    const [Genre, setGenre] = useState('');
    const [Author, setAuthor] = useState('');

    async function sendPostRequest() {
        try {
            const newBook = {
                Title,
                ISBN,
                Author,
                Genre
            };
            console.log('Sending book data:', newBook);
            const response = await axios.post('http://localhost:5000/api/books/addABook', newBook);
            console.log(response.data);
            setISBN('');
            setTitle('');
            setGenre('');
            setAuthor('');
        } catch (err) {
            console.error('Error on client side while adding a book:', err.response?.data || err.message);
        }
    }

    function formSubmission(event) {
        event.preventDefault();
        console.log('Form submitted');
        console.log('ISBN:', ISBN, 'Title:', Title, 'Author:', Author, 'Genre:', Genre);
        sendPostRequest();
    }

    return (
        <div>
            <form onSubmit={formSubmission}>
                <input
                    type="number"
                    placeholder="Enter ISBN"
                    value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Author"
                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Genre"
                    value={Genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
