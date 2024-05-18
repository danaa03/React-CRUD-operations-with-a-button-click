import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function AddBookForm(){
    const [ISBN,setISBN]=useState(-1)
    const [title, setTitle] = useState('')
    const [genre,setGenre] = useState('')
    const [author, setAuthor] = useState('')

    async function sendPostRequest()
    {
        try {
            const newBook = {
                title,
                ISBN,
                author,
                genre
            }
            const response = await axios.post('http://localhost:5000/api/books/addABook',newBook)
            console.log(response.data)
            setISBN(-1)
            setTitle('')
            setGenre('')
            setAuthor('')
        } catch (err)
        {
            console.log("Error on client side while adding a book")
        }

    }

    function formSubmission(event)
    {
        event.preventDefault();
        console.log('form submitted')

        //now backend connection
        console.log("isbn: ",ISBN," title: ",title," author: ",author, " genre: ",genre);
        sendPostRequest()



    }

    return (
        <div>
            <form onSubmit={formSubmission}>
                <input type='number' placeholder='Enter ISBN: ' value = {ISBN} onChange={(e)=>setISBN(e.target.value)}></input>
                <input type= 'text' placeholder = 'Enter Title: ' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <input type= 'text' placeholder = 'Enter Author: ' value = {author} onChange = {(e)=>setAuthor(e.target.value)}></input>
                <input type = 'text' placeholder = 'Enter Genre: ' value = {genre} onChange={(e)=>setGenre(e.target.value)}></input>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

