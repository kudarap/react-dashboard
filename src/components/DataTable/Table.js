import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'

import PaginationAction from './Pagination'

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    marginTop: theme.spacing(3),
    // margin: theme.spacing(1),
    overflowX: 'auto',
  },
  progress: {
    margin: theme.spacing(2),
  },
}))

function DataTable(props) {
  const classes = useStyles()

  const rowsPerPageOptions = [5, 10, 20, 50]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage)

  const {  onChangePage, onChangeRowsPerPage  } = props
  function handleChangePage(evt, page) {
    setPage(page)
    if (onChangePage === undefined) {
      return
    }
    onChangePage(page)
  }
  function handleChangeRowsPerPage(evt) {
    const rows = evt.target.value
    setPage(0)
    setRowsPerPage(rows)
    if (onChangeRowsPerPage === undefined) {
      return
    }
    onChangeRowsPerPage(rows)
  }

  const { schema, data, toolbar, totalCount, showProgress } = props
  return (
    <Paper className={classes.root}>
      <LinearProgress style={{ visibility: showProgress ? 'visible' : 'hidden' }} />
      {toolbar}
      <Table>
        <TableHead>
          <TableRow>
            {schema.map(({ column, props }, i) => 
              <TableCell key={i}>
                {column}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow hover key={row.id} style={{ opacity: showProgress ? 0.1 : 1 }}>
              {schema.map(({ field }, i) => 
                <TableCell key={i}>
                  {typeof field === 'function' ? field(row) : row[field]}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        ActionsComponent={PaginationAction}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

DataTable.propTypes = {
  schema: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,

  // Data source
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  totalCount: PropTypes.number,
  showProgress: PropTypes.bool,
  
  // Toolbar
  toolbar: PropTypes.element,
}

export default DataTable