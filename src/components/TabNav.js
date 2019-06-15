import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function TabNav({ items }) {
  // Set active tab state on refresh.
  const getDefaultState = () => {
    let paths = items.map(item => item.path)
    let index = paths.indexOf(window.location.pathname)
    return index === -1 ? 0 : index
  }

  const [value, setValue] = useState(getDefaultState())

  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      {items.map(item => <Tab
        key={item.path}
        label={item.label}
        to={item.path}
        component={Link}
        disableRipple />)}
    </Tabs>
  )
}

TabNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default TabNav