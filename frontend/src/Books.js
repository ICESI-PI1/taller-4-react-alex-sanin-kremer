import React from 'react';
import axios from "axios";
import BookForm from './BookForm';
import BookTable from './BookTable';



function Books() {
  // Replace this with actual book data or fetching logic
  const [books, setBooks] = React.useState(null);
  //const [bookEdit, setBookEdit] = useState({id:"", title:"", date:"", author:""});
  /*
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];*/

  const getBooks = async () => {
    try {
      const res = await axios.get("/books")
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

    const bookEdit = null;
    const setBookEdit = null;

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
