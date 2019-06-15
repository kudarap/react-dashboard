import { all } from 'redux-saga/effects'

import app from './app'
import auth from './auth'
import devices from './devices'
import version from './version'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    app(),
    auth(),
    devices(),
    version(),
  ])
}