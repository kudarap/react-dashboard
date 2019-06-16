import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Zelda from '@material-ui/core/Link'

import Link from './Link'
import { SpacedGroup } from './Spacer'

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}))

function FootText(props) {
  return <Typography
    {...props}
    variant="caption"
    component="span">
    {props.children}
  </Typography>
}

function FootLink(props) {
  return <Link {...props} underline="none" >
    <FootText>
      {props.children}
    </FootText>
  </Link>
}

function Footer() {
  const classes = useStyles()
  return <footer className={classes.footer}>
    <Container maxWidth="sm">
      <SpacedGroup>
        <FootText color="textSecondary">&copy; 2O19 Chiligarlic.com</FootText>
        <FootLink to="/">Dashboard</FootLink>
        <FootText>
          <Zelda href="http://chiligarlic.com" underline="none">
            Website
          </Zelda>
        </FootText>
      </SpacedGroup>
    </Container>
  </footer>
}

export default Footer