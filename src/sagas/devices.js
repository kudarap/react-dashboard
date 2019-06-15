import { takeLatest, all } from 'redux-saga/effects'

import { searchEntityWithCache, reloadSearchEntityWithCache, getEntity, postEntity, patchEntity } from './util'
import * as Api from '../services/api'
import * as Actions from '../actions'
import * as ActionTypes from '../actions/types'

const cacheKey = 'device-search'
const search = searchEntityWithCache.bind(null, cacheKey, Actions.deviceSearch, Api.deviceSearch)
const reloadSearch = reloadSearchEntityWithCache.bind(null, cacheKey, Actions.deviceSearch, state => state.deviceSearch)

const get = getEntity.bind(null, Actions.deviceGet, Api.device.GET)
const create = postEntity.bind(null, Actions.deviceCreate, Api.device.POST)
const update = patchEntity.bind(null, Actions.deviceUpdate, Api.device.PATCH)

export default function* () {
  yield all([
    takeLatest(ActionTypes.DEVICE.SEARCH.REQUEST, search),
    takeLatest(ActionTypes.DEVICE.SEARCH.RELOAD, reloadSearch),
    takeLatest(ActionTypes.DEVICE.GET.REQUEST, get),
    takeLatest(ActionTypes.DEVICE.CREATE.REQUEST, create),
    takeLatest(ActionTypes.DEVICE.UPDATE.REQUEST, update),
  ])
}