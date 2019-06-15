import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import LinearProgress from '@material-ui/core/LinearProgress'

import DialogError from './DialogError'
import useFormInput from './useFormInput'

function DeviceCreateDialog(props) {
  const { open, loading, errorText, onSubmit, onClose } = props
  const labelInput = useFormInput('')
  const addressInput = useFormInput('')

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit(e, {
      label: labelInput.value,
      address: addressInput.value,
    })
  }

  return <Dialog open={open} onClose={onClose} fullWidth>  
    <form onSubmit={handleFormSubmit}>
      <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />
      <DialogTitle>Create Device</DialogTitle>
      <DialogContent>
        <DialogError text={errorText} />
        <TextField
          {...labelInput}
          autoFocus
          required
          fullWidth
          margin="dense"
          label="Label" />
        <TextField
          {...addressInput}
          required
          fullWidth
          margin="dense"
          label="Address" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading} tabIndex="-1">
          Cancel
        </Button>
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary">
          Submit
        </Button>
      </DialogActions>
    </form>
  </Dialog>
}

DeviceCreateDialog.prototype = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  errorText: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
}

export default DeviceCreateDialog