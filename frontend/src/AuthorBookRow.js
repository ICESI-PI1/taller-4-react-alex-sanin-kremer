import PropTypes from 'prop-types'
import { TableRow, TableCell } from '@mui/material'


function AuthorBookRow({book }) {
  
  return (
    <TableRow
          key={book.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {book.userId}
          </TableCell>
          <TableCell align="right">{book.id}</TableCell>
          <TableCell align="left">{book.title}</TableCell>
          <TableCell align="left">{book.date}</TableCell>
        </TableRow>  )
}

AuthorBookRow.propTypes = {
    book: PropTypes.object,
}

export default AuthorBookRow