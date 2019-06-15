// Private pages
import Overview from '../pages/Overview'
import Devices from '../pages/Devices'
import EventLog from '../pages/EventLog'

// misc pages
import Account from '../pages/Account'
import Settings from '../pages/Settings'
import Credits from '../pages/Credits'

// public pages
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export const privateRoutes = [
  {
    path: '/overview',
    component: Overview,
  },
  {
    path: '/devices',
    component: Devices,
  },
  {
    path: '/event-log',
    component: EventLog,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/credits',
    component: Credits,
  },
]

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '',
    component: NotFound,
  }
]