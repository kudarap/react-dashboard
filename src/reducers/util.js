// WARNING!!!
// RULE! ONLY used this utility file within its folder.

import moment from 'moment'

const dateFormat = 'DD MMM YYYY HH:mm'

export function formatObjectMeta(obj) {
  // NOTE! suppressed warning when filling format param.
  moment.suppressDeprecationWarnings = true
  // Modify object meta formats.
  obj.created_at = moment(obj.created_at).format(dateFormat)
  obj.updated_at = moment(obj.updated_at).format(dateFormat)
  return obj
}

export function formatError(err) {
  if (err === null) {
    return 'Something went wrong!'
  }

  // Append period if not exist.
  return err.endsWith('.') ? err : err + '.'
}

// Creates basic entity object reducer.
export function createEntityReducer(initialObjectState, entityActionType, objectFormatter = o => o) {
  const defaultState = {
    object: initialObjectState,
    fetching: false,
    error: null,
  }

  return function (state = defaultState, action) {
    switch (action.type) {
      // API call request actions
      case entityActionType.GET.REQUEST:
      case entityActionType.CREATE.REQUEST:
      case entityActionType.UPDATE.REQUEST:
      case entityActionType.REMOVE.REQUEST:
        return {
          ...state,
          fetching: true,
          error: null,
        }

      // API call success actions
      case entityActionType.GET.SUCCESS:
      case entityActionType.CREATE.SUCCESS:
      case entityActionType.UPDATE.SUCCESS:
      case entityActionType.REMOVE.SUCCESS:
        return {
          ...state,
          object: objectFormatter(action.result),
          fetching: false,
          error: null,
        }

      // API call failure actions
      case entityActionType.GET.FAILURE:
      case entityActionType.CREATE.FAILURE:
      case entityActionType.UPDATE.FAILURE:
      case entityActionType.REMOVE.FAILURE:
        return {
          ...state,
          fetching: false,
          error: formatError(action.error),
        }

      // Reset to default state.
      case entityActionType.CLEAR:
        return defaultState

      default:
        return state
    }
  }
}

// Creates basic search reducer.
export function createSearchReducer({ REQUEST, SUCCESS, FAILURE }) {
  return function (state = {
    filter: {},
    fetching: false,
    error: null,
    data: [],
    meta: {
      result_count: 0,
      total_count: 0,
    },
  }, action) {
    switch (action.type) {
      case REQUEST:
        const { filter } = action
        return {
          ...state,
          fetching: true,
          error: null,
          filter,
        }
      case SUCCESS:
        const { data, result_count, total_count } = action.result
        return {
          ...state,
          fetching: false,
          error: null,
          data: data,
          meta: {
            result_count,
            total_count,
          },
        }
      case FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.error,
        }
      default:
        return state
    }
  }
}

// Creates basic stats reducer.
export function createStatsReducer({ REQUEST, SUCCESS, FAILURE }) {
  return function(state = {
    scope: null,
    data: [],
    meta: {
      updated: null,
      ttl: 0,
    },
    fetching: false,
    error: null,
  }, action) {
    switch (action.type) {
      case REQUEST:
        const { scope } = action
        return {
          ...state,
          fetching: true,
          error: null,
          scope,
        }
      case SUCCESS:
        const { data, updated, ttl } = action.result
        return {
          ...state,
          fetching: false,
          error: null,
          data,
          meta: {
            updated,
            ttl,
          },
        }
      case FAILURE:
        return {
          ...state,
          fetching: false,
          error: formatError(action.error),
        }
      default:
        return state
    }
  }
}
