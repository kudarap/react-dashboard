import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ReloadIcon from '@material-ui/icons/Refresh'
import TextField from '@material-ui/core/TextField'

import Table from '../components/Table'
import Toolbar from '../components/Toolbar'
import { createLinkID, formatDate } from '../components/DataTable'
import { deviceSearch, notify } from '../actions'
import DeviceCreate from './DeviceCreate'
import DeviceUpdate from './DeviceUpdate'

function deviceTable(Component) {
  return function (props) {
    const baseURL = props.match.url
    const schema = [
      {
        column: 'ID',
        field: ({ id }) => createLinkID(`${baseURL}/${id}`, id)
      },
      {
        column: 'Label',
        field: 'label',
      },
      {
        column: 'Address',
        field: 'address',
      },
      {
        column: 'Created',
        field: ({ created_at }) => formatDate(created_at),
      },
      {
        column: 'Updated',
        field: ({ updated_at }) => formatDate(updated_at),
      },
    ]

    const { dispatch, error } = props
    // Handle error message.
    React.useEffect(() => {
      if (error === null) {
        return
      }

      dispatch(notify.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])

    const handleSearch = filter => dispatch(deviceSearch.request(filter))
    const handleReload = () => dispatch(deviceSearch.reload())

    const toolbar = (
      <Toolbar title={<TextField placeholder="Search Device..." fullWidth />}>
        <IconButton
          key="reload"
          onClick={handleReload}
          disabled={props.fetching}>
          <ReloadIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          to={`${baseURL}/create`}
          component={Link}>Create Device</Button>
      </Toolbar>
    )

    return <>
      <Component
        {...props}
        schema={schema}
        toolbar={toolbar}
        onSearch={handleSearch} />

      <Switch>
        <Route path={`${baseURL}/create`} component={DeviceCreate} />
        <Route path={`${baseURL}/:id`} component={DeviceUpdate} />
      </Switch> 
    </>
  }
}

const mapStateToProps = ({ deviceSearch }) => ({
  data: deviceSearch.data,
  meta: deviceSearch.meta,
  fetching: deviceSearch.fetching,
  error: deviceSearch.error,
})

export default connect(mapStateToProps)(deviceTable(Table))