import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'

import ContentWapper from '../components/SnackbarContentWrapper'
import { notify } from '../actions'

function Notify({ dispatch, kind, text }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (text === null || text === '') {
      return
    }

    setOpen(true)
  }, [text])

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(notify.clear())
    setOpen(false)
  }

  if (kind === '') {
    return null
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}>
      <ContentWapper
        onClose={handleClose}
        variant={kind}
        message={text} />
    </Snackbar>
  )
}

Notify.propTypes = {
  // Injected props by react-redux.
  dispatch: PropTypes.func.isRequired,
  // Notify object reducer states.
  kind: PropTypes.string,
  text: PropTypes.string,
}

const mapStateToProps = ({ notify }) => ({
  kind: notify.kind,
  text: notify.text,
})

export default connect(mapStateToProps)(Notify)
