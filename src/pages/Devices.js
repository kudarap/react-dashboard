import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import DeviceTable from '../containers/DeviceTable'

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  }
}))

function Devices({ match }) {
  const classes = useStyles()
  return <>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Devices
        </Typography>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Container>
      <DeviceTable match={match} />
    </Container>
  </>
}

export default Devices