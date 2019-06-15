import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExploreOff from '@material-ui/icons/ErrorOutline'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '60vh',
  },
}))

export default () => {
  const classes = useStyles()
  return <div className={classes.root}>
    <Typography variant="h1" align="center" color="textSecondary">
      4<ExploreOff style={{ fontSize: 78 }} />4
    </Typography>
    <Typography align="center" color="textSecondary">
      The page you requested does not exist.
    </Typography>
  </div>
}