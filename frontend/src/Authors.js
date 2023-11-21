import React from 'react';
import axios from './config/axios';
import AuthorForm from './AuthorForm';
import AuthorTable from './AuthorTable';
import { useEffect, useLayoutEffect } from 'react';


function Authors() {

  const [authors, setAuthors] = React.useState([]);
  const [authorEdit, setAuthorEdit] = React.useState({id:"", name:"", nationality:""});

  useLayoutEffect(() => {
    getAuthors()
    //delAuthor()
    //addAuthor()
  }, []);

  const getAuthors = async () => {
    try {
      const res = await axios.get('/authors')
      console.log("hola")
      setAuthors(res.data)
    }catch(e){
      console.log(e)
    }
  }

  //useEffect( () => {getAuthors()}, [])

  const addAuthor = async (author) => {
    //Try to edit if author already exists if not, add new author

    
          try{
            const res = await axios.put("/authors/"+author.id, author)
            if(res.status==200){
              getAuthors()
            }else{
              try{
                const res = await axios.post("/authors", author)
                if(res.status==201)
                  getAuthors()
              }catch (e){
                console.log(e)
              }
            }
          }catch (e){
            console.log(e)
          }
      }

  const delAuthor = async (id) => {
      try {
        const res = await axios.delete("/authors/"+id)
        if(res.status==200)
          getAuthors()
      }catch (e){
        console.log(e)
      }
    }

  return (
    <div className="container mt-5">
       <div>
      <AuthorForm addAuthor={addAuthor} authorEdit={authorEdit}/>
      </div>
      <h1 className="mb-4">Authors</h1>
      <AuthorTable authors={authors} delAuthor={delAuthor} editAuthor={setAuthorEdit}/>
    </div>
  );
}

export default Authors;
