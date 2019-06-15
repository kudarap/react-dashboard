import { takeLatest, all } from 'redux-saga/effects'

import * as Api from '../services/api'
import * as Actions from '../actions'
import * as ActionTypes from '../actions/types'
import { getEntity } from './util'

const getVersion = getEntity.bind(null, Actions.version, Api.version)

export default function* () {
  yield all([
    takeLatest(ActionTypes.VERSION.REQUEST, getVersion),
  ])
}