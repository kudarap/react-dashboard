import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deviceCreate, deviceSearch, deviceClear, notify } from '../actions'
import FormDialog from '../components/DeviceCreateDialog'

function DeviceCreate(props) {
  const { history, dispatch } = props
  const { object, loading, error } = props

  const [submitted, setSubmitted] = useState(false)

  // Handle successful create.
  useEffect(() => {
    if (error === null && submitted === true) {
      dispatch(deviceSearch.reload())
      dispatch(notify.success(`Device "${object.label}" successfully created!`))
      goBack()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [object])

  const handleSubmit = (e, payload) => {
    dispatch(deviceCreate.request(payload))
    setSubmitted(true)
  }

  const handleClose = e => {
    e.stopPropagation()
    goBack()
  }

  const goBack = () => {
    dispatch(deviceClear())
    const baseUrl = window.location.pathname.replace('/create', '')
    history.push(baseUrl)
  }

  return <FormDialog
    open={true}
    loading={loading}
    errorText={error}
    onSubmit={handleSubmit}
    onClose={handleClose} />
}

DeviceCreate.propTypes = {
  // Injected props by react-router.
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

export default connect(mapStateToProps)(DeviceCreate)
