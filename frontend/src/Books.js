import React from 'react';
import axios from './config/axios';
import BookForm from './BookForm';
import BookTable from './BookTable';
import { useEffect, useLayoutEffect } from 'react';

const baseURL = 'http://localhost:8080/books'

function Books() {
  
  const [books, setBooks] = React.useState([]);
  const [bookEdit, setBookEdit] = React.useState({id:"", title:"", date:"", author:""});

  useLayoutEffect(() => {
    getBooks()
    delBook()
    addBook()
  }, []);

  const getBooks = async () => {
    try {
      const res = await axios.get('/books')
      setBooks(res.data)
    }catch(e){
      console.log(e)
    }
  }

  //useEffect( () => {getBooks()}, [])

  const addBook = async (book) => {
    //Try to edit if book already exists if not, add new book
          try{
            const res = await axios.put("/books/"+book.id, book)
            if(res.status==200){
              getBooks()
            }else{
              try{
                const res = await axios.post("/books", book)
                if(res.status==201)
                  getBooks()
              }catch (e){
                console.log(e)
              }
            }
          }catch (e){
            console.log(e)
          }
      }

  const delBook = async (id) => {
      try {
        const res = await axios.delete("/books/"+id)
        if(res.status==200)
          getBooks()
      }catch (e){
        console.log(e)
      }
    }

  return (
    <div className="container mt-5">
      <div>
      <BookForm addBook={addBook} bookEdit={bookEdit}/>
      </div>
      <h1 className="mb-4">Books</h1>
      <BookTable books={books} delBook={delBook} editBook={setBookEdit}/>
    </div>
  );
}

export default Books;
