import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import AuthorRow from './AuthorRow'

function  AuthorTable ({authors, delAuthor, editAuthor}) {

  const  renderAuthors = () => {
    return  authors.map((author)=>

         (<AuthorRow key={author.id} author={author} delauthor={delAuthor} editAuthor={editAuthor}/>)
    )
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Author Id</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="left">Nationality</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderAuthors()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


AuthorTable.propTypes = {
  authorList: PropTypes.array,
  delAuthor: PropTypes.func,
  editAuthor: PropTypes.func
}

export default AuthorTable