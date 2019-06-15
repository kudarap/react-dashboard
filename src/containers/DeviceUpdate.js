import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deviceGet, deviceUpdate, deviceSearch, deviceClear, notify } from '../actions'
import FormDialog from '../components/DeviceUpdateDialog'

function DeviceView(props) {
  const { match, history, dispatch } = props
  const { object, loading, error } = props

  const [submitted, setSubmitted] = useState(false)

  // Gets initial data on open.
  const deviceID = match.params.id
  useEffect(() => {
    if (deviceID === undefined) {
      return
    }
    
    dispatch(deviceGet.request(deviceID))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceID])

  // Handle successful update.
  useEffect(() => {
    if (error === null && submitted === true) {
      dispatch(deviceSearch.reload())
      dispatch(notify.success(`Device "${object.label}" successfully updated!`))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [object])

  const handleSubmit = (e, payload) => {
    dispatch(deviceUpdate.request(deviceID, payload))
    setSubmitted(true)
  }

  const handleClose = e => {
    e.stopPropagation()
    goBack()
  }

  const goBack = () => {
    dispatch(deviceClear())
    const baseUrl = window.location.pathname.replace('/' + deviceID, '')
    history.push(baseUrl)
  }

  return <FormDialog
    open={true}
    device={object}
    loading={loading}
    errorText={error}
    onSubmit={handleSubmit}
    onClose={handleClose} />
}

DeviceView.propTypes = {
  // Injected props by react-router.
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  // Injected props by react-redux.
  dispatch: PropTypes.func.isRequired,
  // Device reducer.
  object: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

const mapStateToProps = ({ device }) => ({
  object: device.object,
  loading: device.fetching,
  error: device.error,
})

export default connect(mapStateToProps)(DeviceView)
