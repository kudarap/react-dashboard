import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import ApiVerion from '../containers/ApiVersionView'
import AppVerion from '../components/AppVersion'
import ColorSettings from '../components/ColorSettings'

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

function Settings() {
  const classes = useStyles()
  return <>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Settings
        </Typography>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md">
      {/* Theme settings */}
      <Paper className={classes.paper}>
        <ColorSettings />
      </Paper>

      {/* API details */}
      <Paper className={classes.paper}>
        <ApiVerion />
      </Paper>

      {/* App details */}
      <Paper className={classes.paper}>
        <AppVerion />
      </Paper>
    </Container>
  </>
}

export default Settings