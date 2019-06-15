import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DataTable from './DataTable'

function Table(props) {
  const { defaultFilter = {}, defaultOffset = 10} = props
  const initialFilter = {
    ...defaultFilter,
    meta: true,
    slice: `0,${defaultOffset}`,
    order: 'created_at,desc',
  }
  const [offset, setOffset] = useState(defaultOffset)
  const [filter, setFilter] = useState(initialFilter)

  // Gets initial data on open.
  useEffect(() => {
    props.onSearch(filter)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const handleChangePage = index => {
    let slice = `${index * offset},${(index + 1) * offset}`
    setFilter({ ...filter, slice })
  }

  const handleChangeRowPerPage = length => {
    setOffset(length)
    let slice = `0,${length}`
    setFilter({ ...filter, slice })
  }

  const { data, meta, fetching } = props
  const { schema, toolbar } = props
  return <DataTable
    schema={schema}
    rowsPerPage={defaultOffset}
    toolbar={toolbar}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowPerPage}
    totalCount={meta.total_count || 0}
    showProgress={fetching}
    data={data} />
}

Table.propTypes = {
  // Injected props by react-router.
  match: PropTypes.object.isRequired,
  // Table props.
  schema: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  defaultFilter: PropTypes.object,
  defaultOffset: PropTypes.number,
  toolbar: PropTypes.element,
  // Datasource reducer states.
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  meta: PropTypes.object,
  fetching: PropTypes.bool,
  error: PropTypes.string,
}

export default Table