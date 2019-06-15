import * as ActionTypes from '../actions/types'

export function notify(state = {
  kind: '',
  text: '',
}, action) {
  switch (action.type) {
    case ActionTypes.APP_NOTIFY:
      let { kind, text } = action
      // Fixes the transition of kind when
      // closing notif.
      if (kind === 'clear') {
        kind = state.kind
      }

      return { ...state, kind, text}
    default:
      return state
  }
}

export function settings(state = {
  devices: [],
  fetching: false,
  error: null,
}, action) {
  switch (action.type) {
    case ActionTypes.APP_SETTINGS.REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case ActionTypes.APP_SETTINGS.SUCCESS:
      const { devices } = action
      return {
        ...state,
        devices,
        fetching: false,
        error: null,
      }
    case ActionTypes.APP_SETTINGS.FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state
  }
}