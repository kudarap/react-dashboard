import * as ActionTypes from '../actions/types'
import * as util from './util'

const initialObjectState = {
  id: '',
  label: '',
  address: '',
  // meta data
  created_at: '',
  updated_at: '',
}

export const device = util.createEntityReducer(
  initialObjectState,
  ActionTypes.DEVICE,
  util.formatObjectMeta
)

export const deviceSearch = util.createSearchReducer(
  ActionTypes.DEVICE.SEARCH
)