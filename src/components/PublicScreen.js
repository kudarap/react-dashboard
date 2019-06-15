import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Brand from './Brand'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    minHeight: 300,
  },
}))

function PublicRoot(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Brand />
      <Container className={classes.main}>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default PublicRoot