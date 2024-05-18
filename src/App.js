import './App.css';
import BooksList from './components/BooksList'
import Dropdown from './components/Dropdown'
import AddBookForm from './components/AddBookForm'

import React, {useState} from 'react'

function App() {
  const [buttonText,setButtonText] = useState('Click Me')
  function toggleComponent(){
    if(buttonText==='Click Me')
    {
      setButtonText('View All Books')
    }
    if (buttonText ==='View All Books')
    {
      setButtonText('Dropdown List of Genres')
    }
    else if (buttonText === 'Dropdown List of Genres')
    {
      setButtonText('Add a Book')
    }
    else if (buttonText === 'Add a Book')
    {
      setButtonText('View All Books')
    }
  }
  return (
    <div>
          <button onClick ={toggleComponent}>{buttonText}</button>
          {buttonText==='View All Books' && <BooksList/>}
          {buttonText==='Dropdown List of Genres' && <Dropdown/>}
          {buttonText==='Add a Book' && <AddBookForm/>}
    </div>
  );
}

export default App;
