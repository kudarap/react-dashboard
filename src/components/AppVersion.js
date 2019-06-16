import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Zelda from './Link'

import packagejson from '../../package.json'

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(1, 3, 3),
  },
}))

function VersionForm() {
  const classes = useStyles()
  return <>
    <div className={classes.body}>
      <Typography variant="h6" color="secondary">Chiligarlic Dashboard</Typography>
      <Typography variant="caption">
        Version {packagejson.version}
        <br />
        Made by ninjas @ <Link color="secondary" href="http://chiligarlic.com" target="_blank">chiligarlic</Link>.
        <br />
        <br />
        Chiligarlic Dashboard is made possible by <Zelda to="/credits">open source software</Zelda>.
      </Typography>
    </div>
  </>
}

export default VersionForm