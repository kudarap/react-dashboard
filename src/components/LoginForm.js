import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import DialogError from './DialogError'
import Link from './Link'
import Preloader from './Preloader'
import useFormInput from './useFormInput'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}))

function LoginForm({ onSubmit, loading, errorText }) {
  const classes = useStyles()

  const emailInput = useFormInput('')
  const passwordInput = useFormInput('')

  function handleSubmit(e) {
    e.preventDefault()
    if (loading) {
      return
    }

    onSubmit(emailInput.value, passwordInput.value)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Preloader open={loading} />
      <DialogError text={errorText} />
      <TextField
        {...emailInput}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus />
      <TextField
        {...passwordInput}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password" />
      <Typography variant="subtitle1" align="right">
        <Link to="/reset-password" tabIndex="-1">Forgot password?</Link>
      </Typography>
      <Button
        size="large"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
        className={classes.submit}>
        Go
      </Button>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorText: PropTypes.string,
  loading: PropTypes.bool,
}

export default LoginForm