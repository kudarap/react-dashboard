import { 
  createRequestTypes,
  createEntityActionTypes,
} from './util'

export const APP_NOTIFY = 'APP_NOTIFY'
export const APP_SETTINGS = createRequestTypes('APP_SETTINGS')

export const REGISTER = createRequestTypes('REGISTER')
export const LOGIN = createRequestTypes('LOGIN')
export const PROFILE = createRequestTypes('PROFILE')
export const VERSION = createRequestTypes('VERSION')

// Generic entity method and its action types.
export const DEVICE = createEntityActionTypes('DEVICE')
