import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'

import * as Local from '../services/local'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
  },
  body: {
    padding: theme.spacing(1, 3, 1),
  },
}))

const key = 'is_darktheme'

function ColorSettings() {
  const [state, setState] = React.useState({
    darkmode: Local.get(key) || false,
  })

  React.useEffect(() => {
    Local.save(key, state.darkmode)
  }, [state])

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
    window.location.reload()
  }

  const classes = useStyles()
  return <>
    <div className={classes.body}>
      <div className={classes.header}>
        <Typography
          variant="h6"
          component="span"
          color="primary"
          className={classes.title}>
          Dark mode
        </Typography>
        <Switch
          checked={state.darkmode}
          onChange={handleChange('darkmode')}
          value="checkedB"
          color="primary"
        />
      </div>
    </div>
  </>
}

export default ColorSettings