import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

import Text from './ReadOnlyField'
import GroupFields from './GroupFields'

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(1, 3, 3),
  },
}))

function FormData({ data }) {
  return <>
    <Text label="Email" value={data.email} />
    <GroupFields>
      <Text label="First Name" value={data.first_name} />
      <Text label="Last Name" value={data.last_name} />
    </GroupFields>
    <GroupFields>
      <Text label="Created" value={data.created_at} />
      <Text label="Updated" value={data.updated_at} />
    </GroupFields>
  </>
}

function ProfileForm({ data, loading }) {
  const classes = useStyles()
  return <>
    <LinearProgress style={{ visibility: loading ? 'visible' : 'hidden' }} />
    <div className={classes.body}>
      <Typography variant="h6" color="primary">Profile</Typography>
      <FormData data={data} />
    </div>
  </>
}

ProfileForm.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
}

export default ProfileForm