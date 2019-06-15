import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import logo from '../logo.svg'

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: theme.spacing(5),
  },
  logo: {
    height: 31,
    marginRight: 10
  },
}))

function Brand(props) {
  const classes = useStyles()
  return (
    <Typography
      {...props}
      component="h1"
      variant="h4"
      align="center"
      color="textSecondary"
      className={classes.text}>
      <img src={logo} alt="logo" className={classes.logo} />
      chlgrlc Dashboard
    </Typography>
  )
}

export default Brand
