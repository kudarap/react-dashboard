import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import OverviewIcon from '@material-ui/icons/Poll'
import UserIcon from '@material-ui/icons/People'
import MarketIcon from '@material-ui/icons/Store'
import OrderIcon from '@material-ui/icons/ShoppingCart'
import AuthnIcon from '@material-ui/icons/VerifiedUser'
import TxnIcon from '@material-ui/icons/Receipt'

import ProductIcon from '@material-ui/icons/Widgets'
import DeliverIcon from '@material-ui/icons/LocalShipping'
import ReturnIcon from '@material-ui/icons/AssignmentReturn'
import SettingIcon from '@material-ui/icons/Settings'
import EventLogIcon from '@material-ui/icons/EventNote'
// import RateLimitIcon from '@material-ui/icons/Report'

import logo from '../logo.svg'

const appName = 'chlgrlc'

function NavItem({ label, to, icon }) {
  return (
    <ListItem
      button
      component={Link}
      selected={window.location.pathname.includes(to)}
      to={to}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  )
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired, 
  to: PropTypes.string.isRequired, 
  icon: PropTypes.object.isRequired,
}

function SubNav({ header, items, showHeader = true, dense = true }) {
  const subHead = showHeader 
    ? <ListSubheader component="div">{header}</ListSubheader> : null

  return <>
    <List component="nav" subheader={subHead} dense={dense}>
      {items.map(item => <NavItem key={item.to} {...item} />)}
    </List>
    <Divider />
  </>
}

SubNav.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
  dense: PropTypes.bool,
}

const dashboardNav = {
  header: 'Dashboard',
  items: [
    {
      label: 'Overview',
      to: '/overview',
      icon: <OverviewIcon />,
    },
    {
      label: 'Users',
      to: '/users',
      icon: <UserIcon />,
    },
    {
      label: 'Market',
      to: '/market',
      icon: <MarketIcon />,
    },
    {
      label: 'Orders',
      to: '/orders',
      icon: <OrderIcon />,
    },
    {
      label: 'Authentication',
      to: '/authentication',
      icon: <AuthnIcon />,
    },
    {
      label: 'Transaction',
      to: '/transaction',
      icon: <TxnIcon />,
    },
  ],
}

const manageNav = {
  header: 'Manage',
  items: [
    {
      label: 'Products',
      to: '/devices',
      icon: <ProductIcon />,
    },
    {
      label: 'Returns',
      to: '/returns',
      icon: <ReturnIcon />,
    },
    {
      label: 'Delivery',
      to: '/delivery',
      icon: <DeliverIcon />,
    },
    {
      label: 'Events',
      to: '/event',
      icon: <EventLogIcon />,
    },
    {
      label: 'Settings',
      to: '/settings',
      icon: <SettingIcon />,
    },
  ],
}

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: '1px solid ' + theme.palette.divider,
  },
  headingText: {
    display: 'inline',
    fontSize: 22,
    letterSpacing: 1,
  },
  headingLogo: {
    height: 30,
    marginRight: 28,
    marginLeft: -11,
  },
}))

function Navigation() {
  const classes = useStyles()

  return (
    <div>
      <AppBar elevation={0} position="sticky" color="inherit" className={classes.appBar}>
        <Toolbar variant="dense">
          <img src={logo} alt="logo" className={classes.headingLogo} />
          <Typography color="textSecondary" variant="h6" className={classes.headingText}>
            {appName}
        </Typography>
        </Toolbar>
      </AppBar>
      <SubNav {...dashboardNav} />
      <SubNav {...manageNav} />
    </div>
  )
}

export default Navigation