import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import ReloadIcon from '@material-ui/icons/Refresh'
import Typography from '@material-ui/core/Typography'

import Toolbar from './Toolbar'

const options = [
  { label: 'Last 24 hours', value: 'last-24-h'},
  { label: 'Last 7 days', value: 'last-7-d'},
  { label: 'Last 30 days', value: 'last-30-d'},
]

function ChartToolbar(props) {
  const [scope, setScope] = React.useState(props.scope)

  function handleChange(evt) {
    props.onChangeScope(evt.target.value)
    setScope(evt.target.value)
  }

  // Title with fine text.
  const title = <>
    {props.title}
    <Typography
      variant="caption"
      color="textSecondary">
      &nbsp; {props.subtitle}
    </Typography>
  </>

  return (
    <Toolbar title={title}>
      <Select value={scope} onChange={handleChange}>
        {options.map((o, i) => <MenuItem key={i} value={o.value}>{o.label}</MenuItem>)}
      </Select>
      <IconButton onClick={props.onReload}>
        <ReloadIcon />
      </IconButton>
    </Toolbar>
  )
}

ChartToolbar.defaultProps = {
  scope: options[0].value,
  onChangeScope: () => {},
  onReload: () => {},
}

ChartToolbar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  scope: PropTypes.string,
  onChangeScope: PropTypes.func,
  onReload: PropTypes.func,
}

export default ChartToolbar