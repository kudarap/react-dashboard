import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import MoreIcon from '@material-ui/icons/MoreVert'

import ProfileView from '../containers/ProfileView'

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    overflowX: 'auto',
    marginBottom: theme.spacing(3),
  },
}))

function Account() {
  const classes = useStyles()
  return <>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Account
        </Typography>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md">
      {/* Profile info */}
      <Paper className={classes.paper}>
        <ProfileView />
      </Paper>
    </Container>
  </>
}

export default Account