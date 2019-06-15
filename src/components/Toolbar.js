import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { SpacedGroup } from './Spacer'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    paddingRight: theme.spacing(2),
  }
}))

function MyToolbar(props) {
  const classes = useStyles()
  return (
    <Toolbar {...props}>
      <Typography
        variant="h6"
        color="primary"
        className={classes.title}>
        {props.title}
      </Typography>
      <SpacedGroup>
        {props.children}
      </SpacedGroup>
    </Toolbar>
  )
}

MyToolbar.propTypes = {
  title: PropTypes.any,
  children: PropTypes.node,
}

export default MyToolbar
