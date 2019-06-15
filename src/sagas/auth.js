import { takeLatest, put, all, call } from 'redux-saga/effects'

import * as Api from '../services/api'
import * as Actions from '../actions'
import * as ActionTypes from '../actions/types'
import { getEntity } from './util'

function* requestLogin({ email, password }) {
  try {
    const auth = yield call(Api.login, email, password)
    yield put(Actions.login.success(auth))
  } catch (e) {
    yield put(Actions.login.failure(e.message))
  }
}

const getProfile = getEntity.bind(null, Actions.profile, Api.profile)

export default function* () {
  yield all([
    takeLatest(ActionTypes.LOGIN.REQUEST, requestLogin),
    takeLatest(ActionTypes.PROFILE.REQUEST, getProfile),
  ])
}