import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Hidden from '@material-ui/core/Hidden'

import Navigation from './Navigation'
import AvatarMenu from './AvatarMenu'

const drawerWidth = 240
const breakPoint = 'md'
const denseToolbarHeight = '@media (min-width:0px) and (orientation: landscape)'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  drawer: {
    [theme.breakpoints.up(breakPoint)]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up(breakPoint)]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginLeft: -15,
    marginRight: 15,
    [theme.breakpoints.up(breakPoint)]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar[denseToolbarHeight].minHeight,
    height: '100vh',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
  },
}))

function PrivateScreen({ container, children }) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => setOpen(!open)

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={classes.appBar}>
        <Toolbar variant="dense" disableGutters={false} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            color="inherit"
            noWrap
            className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit" disabled>
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <AvatarMenu name={'javinczki02@gmail.com'} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <Navigation />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open>
            <Navigation />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}

PrivateScreen.propTypes = {
  container: PropTypes.element,
}

export default PrivateScreen