import 'isomorphic-fetch'

import * as http from './http'

const // API Endpoints
  LOGIN = '/login',
  PROFILE = '/me',
  VERSION = '/version',
  DEVICE = '/device'

export function login(email, password) {
  return http.request(http.POST, LOGIN, {
    email, password,
  })
}

export function profile() {
  return http.request(http.GET, PROFILE)
}

export function version() {
  return http.request(http.GET, VERSION)
}

// export const profile = http.baseObjectRequest(PROFILE)
export const device = http.baseObjectRequest(DEVICE)

export const deviceSearch = http.baseSearchRequest(DEVICE)
