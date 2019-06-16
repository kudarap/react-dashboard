import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import UserIcon from '@material-ui/icons/AccountCircle'

import { appLogout } from '../services/app'

const useStyles = makeStyles(theme => ({
  menu: {
    // marginTop: theme.spacing(4),
  }
}))

function AvatarMenu({ name }) {
  const classes = useStyles()
  
  const [anchorEl, setAchorEl] = useState(null)

  const handleClick = evt => {
    setAchorEl(evt.currentTarget)
  }

  const handleClose = () => {
    setAchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-owns={anchorEl ? 'avatar-menu' : undefined}
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}>
        <UserIcon />
      </IconButton>

      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}>
        <MenuItem component={Link} onClick={handleClose} to="/account">Account</MenuItem>
        <MenuItem onClick={appLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

AvatarMenu.propTypes = {
  name: PropTypes.string.isRequired,
}

export default AvatarMenu