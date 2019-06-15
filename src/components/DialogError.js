import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => {
  const spaceSize = theme.spacing(3)
  return {
    root: {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
      padding: theme.spacing(2),
      paddingLeft: spaceSize,
      paddingRight: spaceSize,
      marginLeft: -spaceSize,
      marginRight: -spaceSize,
    },
  }
})

function DialogError({ text }) {
  const classes = useStyles()

  if (text === null) {
    return null
  }

  return (
    <Typography variant="subtitle1" className={classes.root}>
      {text}
    </Typography>
  )
}

DialogError.propTypes = {
  text: PropTypes.string,
}

export default DialogError