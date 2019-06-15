import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {},
  appBar: {
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  }
}))

function EventLog() {
  const classes = useStyles()
  return <>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Event Log
        </Typography>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Typography variant="h2" align="center" color="textSecondary">
      Page Content goes here!
    </Typography>
  </>
}

export default EventLog