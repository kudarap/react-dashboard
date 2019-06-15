import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function ReadOnlyField(props) {
  return (
    <TextField
      {...props}
      margin="dense"
      InputProps={{ readOnly: true }}
      fullWidth />
  )
}

ReadOnlyField.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  multiline: PropTypes.bool,
}

export default ReadOnlyField