import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'

import DialogError from './DialogError'
import ReadOnlyField from './ReadOnlyField'
import GroupFields from './GroupFields'

function DeviceViewDialog(props) {
  const { open, device, loading, errorText, onSubmit, onClose } = props

  const [label, setLabel] = React.useState('')
  const [address, setAddress] = React.useState('')

  // Handing initial form values.
  React.useEffect(() => {
    setLabel(device.label)
    setAddress(device.address)
  }, [device])

  const handleFieldChange = setValue => e => setValue(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit(e, {
      label,
      address,
    })
  }

  return <Dialog open={open} onClose={onClose} fullWidth>
    <form onSubmit={handleFormSubmit}>
      <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />
      <DialogTitle>Device Details</DialogTitle>
      <DialogContent>
        <DialogError text={errorText} />
        <ReadOnlyField label="ID" value={device.id} />
        <TextField
          value={label}
          onChange={handleFieldChange(setLabel)}
          fullWidth
          required
          margin="dense"
          label="Label" />
        <TextField
          value={address}
          onChange={handleFieldChange(setAddress)}
          fullWidth
          required
          margin="dense"
          label="Address" />
        <GroupFields>
          <ReadOnlyField label="Created Date" value={device.created_at} />
          <ReadOnlyField label="Updated Date" value={device.updated_at} />
        </GroupFields>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading} tabIndex="-1">
          Close
        </Button>
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary">
          Update
        </Button>
      </DialogActions>
    </form>
  </Dialog>
}

DeviceViewDialog.prototype = {
  open: PropTypes.bool.isRequired,
  device: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  errorText: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
}

export default DeviceViewDialog