import { takeLatest, put, all, call } from 'redux-saga/effects'

import * as Api from '../services/api'
import * as Local from '../services/local'
import * as Actions from '../actions'
import * as ActionTypes from '../actions/types'

const cacheTTL = 60 * 10 // 10 minutes
const cacheKey = 'setting-device'

function* readSettings() {
  let devices

  // Check for cached data.
  devices = Local.get(cacheKey)
  if (devices !== null) {
    yield put(Actions.settings.success({ devices }))
    return
  }

  // Request for new one and save on cache.
  try {
    devices = yield call(Api.deviceSearch)
  } catch (e) {
    yield put(Actions.settings.failure(e.message))
  }

  yield Local.save(cacheKey, devices, cacheTTL)
  yield put(Actions.settings.success({ devices }))
}

export default function* () {
  yield all([
    takeLatest(ActionTypes.APP_SETTINGS.REQUEST, readSettings),
  ])
}