import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import AuthorBookRow from './AuthorBookRow'
import { useLocation } from 'react-router-dom';



function  AuthorBookTable ({books}) {

  let { state } = useLocation();

  const  renderBooks = () => {
    return  books.map((book)=>

         (<AuthorBookRow key={book.id} book={book}/>)
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
        </TableRow>
      </TableHead>
      <TableBody>
        {renderBooks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


AuthorBookTable.propTypes = {
  bookList: PropTypes.array,
}

export default AuthorBookTable
