import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Link from '../components/Link'
import Login from '../containers/Login'

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
}))

export default () => {
  const classes = useStyles()
  return <Container maxWidth="xs">
    <Paper className={classes.paper}>
      <Typography component="h2" variant="h5" color="textSecondary">
        Sign in
      </Typography>
      <Typography variant="body2" color="textSecondary">
        with your Email Account
      </Typography>
      <Login />
    </Paper>
    <Typography align="center">
      Don't have an account? <Link to="/register">Sign Up</Link>
    </Typography>
  </Container>
}