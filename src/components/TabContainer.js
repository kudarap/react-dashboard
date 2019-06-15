import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {},
}))

function TabContainer({ items, baseUrl }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Switch>
        {items.map(item => <Route
          key={item.path}
          path={item.path}
          component={item.component} />)}
        {/* Set first item as default */}
        <Redirect from={baseUrl} to={items[0].path} />
      </Switch>
    </div>
  )
}

TabContainer.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default TabContainer