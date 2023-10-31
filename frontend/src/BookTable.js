import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import BookRow from './BookRow'

function  BookTable ({books, delBook, editBook}) {

  const  renderBooks = () => {
    return  books.map((book)=>

         (<BookRow key={book.id} book={book} delbook={delBook} editBook={editBook}/>)
    )
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Book Id</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="left">Publication Date</TableCell>
          <TableCell align="left">Author Id</TableCell>
          <TableCell align="left">Actions</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {renderBooks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


BookTable.propTypes = {
  bookList: PropTypes.array,
  delBook: PropTypes.func,
  editBook: PropTypes.func
}

export default BookTable