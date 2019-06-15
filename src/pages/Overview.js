import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'

import SimpleLineChart from '../components/SimpleLineChart'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    ...theme.mixins.gutters(),
  },
  appBar: {
    marginBottom: theme.spacing(4),
  },
  chartContainer: {
    marginLeft: -22,
  },
  title: {
    flexGrow: 1,
  }
}))

function Overview() {
  const classes = useStyles()
  return <>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Overview
        </Typography>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    <div className={classes.root}>
      <SimpleLineChart />
      <SimpleLineChart />
      <SimpleLineChart />
      <SimpleLineChart />
    </div>
  </>
}

export default Overview