import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

import Text from './ReadOnlyField'
import GroupFields from './GroupFields'
import { API_ROOT } from '../services/http'

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(1, 3, 3),
  },
}))

function FormData({ data }) {
  return <>
    <GroupFields>
      <Text label="Host" value={API_ROOT} />
      <Text label="Tag" value={data.tag} />
    </GroupFields>
    <Text label="Commit Hash" value={data.git_commit} />
    <Text label="Build Date" value={data.built} />
  </>
}

function VersionForm({ data, loading }) {
  const classes = useStyles()
  return <>
    <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />
    <div className={classes.body}>
      <Typography variant="h6" color="primary">chlgrlc Dashboard</Typography>
      <FormData data={data} />
    </div>
  </>
}

VersionForm.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
}

export default VersionForm