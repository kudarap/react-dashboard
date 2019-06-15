// LocalStorage with cache mechanism.

import crypto from 'crypto'

const store = localStorage
const CACHE_KEY = 'cache'

const hash = data => crypto.createHash('md5').update(data).digest('hex')

const cKey = key => `${CACHE_KEY}:${hash(key)}`

const now = () => (new Date()).getTime()

const isExpired = ttl => ttl < now()

export function get(key) {
  const item = JSON.parse(store.getItem(cKey(key)))
  if (item === null) {
    return null
  }

  const { data, ttl } = item
  // Return non expiry item.
  if (ttl === null) {
    return data
  }

  // Remove expired item.
  if (isExpired(ttl)) {
    remove(key)
    return null
  }

  return data
}

export function getTTL(key) {
  const item = JSON.parse(store.getItem(cKey(key)))
  if (item === null) {
    return null
  }

  return item.ttl
}

export function save(key, data, sec = null) {
  // Free up expired items.
  sweep()

  let ttl = sec
  if (sec !== null) {
    // Converts TTL seconds to millisec.
    ttl = Number(sec) * 1000
    // and adds now millisec.
    ttl += now()
  }

  const item = { data, ttl }
  store.setItem(cKey(key), JSON.stringify(item))
}

export function remove(key) {
  store.removeItem(cKey(key))
}

// Checks for expired items and remove them.
function sweep() {
  for (let key in store) {
    if (!key.startsWith(CACHE_KEY)) {
      return
    }

    const { ttl } = JSON.parse(store.getItem(key))
    if (!isExpired(ttl)) {
      return
    }

    store.removeItem(key)
  }
}

export default {
  get, save, remove
}