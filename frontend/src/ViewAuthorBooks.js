import React from 'react';
import axios from './config/axios';
import AuthorBookTable from './AuthorBookTable';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation, Link } from "react-router-dom";


function Books() {
    const [books, setBooks] = React.useState([]);
    const { state } = useLocation();
    const url = `/books/${state.author.id}/books`
    const header = state.author.name+'s Books'

    useLayoutEffect(() => {
        getBooks()
    }, []);

    const getBooks = async () => {
        try {
            const res = await axios.get(url)
            console.log("hola")
            setBooks(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    //useEffect( () => {getBooks()}, [])

   

    return (
        <div className="container mt-5">
            <h1 className="mb-4">{header}</h1>
            <AuthorBookTable books={books} />
        </div>
    );
}

export default Books;
