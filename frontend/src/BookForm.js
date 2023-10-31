import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField, FormControlLabel, Checkbox } from '@mui/material'

function BookForm({addBook, bookEdit}) {
    const [id, setId] =  useState('')
    const [title, setTitle] =  useState('')
    const [date , setDate] =  useState('')
    const [author, setAuthor] =  useState('')

    useEffect(()=>{
      setId(bookEdit.id)
      setTitle(bookEdit.title)
      setDate(bookEdit.date)
      setAuthor(bookEdit.author)
      //console.log(bookEdit)
    }, [bookEdit])

    const handleClick = ()=>{
        //e.preventDefault()
        addBook({id,title, date, author})
    }

    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Book Id" variant="standard" value={userId} onChange={(e)=>{setId(e.target.value)}}/>
      <TextField label="Title" variant="standard" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <TextField label="Date" variant="standard" value={title} onChange={(e)=>{setDate(e.target.value)}}/>
      <TextField label="Author" variant="standard" value={title} onChange={(e)=>{setAuthor(e.target.value)}}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

BookForm.propTypes = {
    addBook: PropTypes.func, 
    bookEdit:PropTypes.object
}

export default BookForm