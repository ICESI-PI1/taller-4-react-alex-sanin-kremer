import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
import { Link } from 'react-router-dom';

function BookRow({book, delbook, editBook }) {
  const  handleDelete = () =>  {
    delbook(book.id)
  }
  return (
    <TableRow
          key={book.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{book.id}</TableCell>
          <TableCell align="left">{book.title}</TableCell>
          <TableCell align="left">{book.publicationDate}</TableCell>
          <TableCell align="left">{book.authorID}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{editBook(book)}}>Edit</Button>
            <Link to={{
                pathname: `/books/${book.id}`,
                state: { book: book }
              }}>
            <button className='btn btn-primary'>View Book</button>
            </Link>
          </TableCell>
        </TableRow>  )
}

BookRow.propTypes = {
    book: PropTypes.object,
    delBook: PropTypes.func,
    editBook: PropTypes.func
}

export default BookRow