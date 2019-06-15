import querystring from 'querystring'
import * as Local from '../services/local'

function keyer(params) {
  switch (typeof(params)) {
    case 'string':
      return params
    case 'object':
      return querystring.stringify(params)
    default:
      return JSON.stringify(params)
  }
}

function withCache(key, ttl, fn) {
  return function* (args) {
    const ckey = `${key}/${keyer(args)}`
    let data = Local.get(ckey)
    if (data !== null) {
      return data
    }

    data = yield fn(args)
    Local.save(ckey, data, ttl)
    return data
  }
}

export default withCache