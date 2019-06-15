import { combineReducers } from 'redux'

import { notify, settings } from './app'
import { login, profile } from './auth'
import { deviceSearch, device } from './devices'
import version from './version'

const rootReducer = combineReducers({
  // Application states.
  notify,
  settings,
  // Service user states.
  login,
  profile,
  // Service resource states.
  version,
  deviceSearch,
  device,
})

export default rootReducer