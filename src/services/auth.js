import Cookies from 'js-cookie'

const AUTH_KEY = 'chiligarlic-dashboard'

export const isOk = () => {
  return (get() || {}).hasOwnProperty('id')
}

export const set = (data) => {
  Cookies.set(AUTH_KEY, data)
}

export const get = () => {
  return Cookies.getJSON(AUTH_KEY)
}

export const clear = () => {
  Cookies.remove(AUTH_KEY)
}

export function getAccessToken() {
  if (!isOk()) {
    return null
  }

  return get()['token'] || null
}

export default {
  isOk, set, get, clear,
}
