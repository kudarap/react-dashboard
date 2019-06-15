import { action, createGenericEntityActions, createGenericSearchActions } from './util'

import {
  APP_NOTIFY,
  APP_SETTINGS,

  LOGIN,
  PROFILE,
  VERSION,

  DEVICE,
} from './types'

// ---------------------------- Application Actions ----------------------------
export const notify = {
  success: text => action(APP_NOTIFY, { kind: 'success', text }),
  error: text => action(APP_NOTIFY, { kind: 'error', text }),
  info: text => action(APP_NOTIFY, { kind: 'info', text }),
  warning: text => action(APP_NOTIFY, { kind: 'warning', text }),
  clear: () => action(APP_NOTIFY, { kind: 'clear', text: '' }),
}

export const settings = {
  request: () => action(APP_SETTINGS.REQUEST),
  success: settings => action(APP_SETTINGS.SUCCESS, settings),
  failure: error => action(APP_SETTINGS.FAILURE, { error }),
}

// ---------------------------- Service Actions ----------------------------
export const login = {
  request: (email, password) => action(LOGIN.REQUEST, { email, password }),
  success: auth => action(LOGIN.SUCCESS, { auth }),
  failure: error => action(LOGIN.FAILURE, { error }),
}

export const profile = {
  request: () => action(PROFILE.REQUEST),
  success: data => action(PROFILE.SUCCESS, { data }),
  failure: error => action(PROFILE.FAILURE, { error }),
}

export const version = {
  request: () => action(VERSION.REQUEST),
  success: data => action(VERSION.SUCCESS, { data }),
  failure: error => action(VERSION.FAILURE, { error }),
}

// Generic Device entity method actions and types.
export const deviceSearch = createGenericSearchActions(DEVICE.SEARCH)
export const [
  deviceGet,
  deviceCreate,
  deviceUpdate,
  ,
  deviceClear,
] = createGenericEntityActions(DEVICE)
