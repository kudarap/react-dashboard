import 'isomorphic-fetch'
import querystring from 'querystring'

import { getAccessToken } from './auth'

// const API_ROOT = 'http://localhost:8000'
export const API_ROOT = 'https://api.dev.chlgrlc.com'

export const GET = 'GET'
export const POST = 'POST'
export const PATCH = 'PATCH'
export const DELETE = 'DELETE'

const defaultRequestOpts = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
}

// Base http request and handles authentication token.
export function request(method, endpoint, data) {
  if (method === '') {
    throw Error('Request method required')
  }

  let opts = {
    ...defaultRequestOpts,
    method,
  }
  // GET request cant have body.
  if (method !== GET) {
    opts['body'] = JSON.stringify(data)
  }

  // Inject Authorization header when  auth token is pressent.
  const token = getAccessToken()
  if (token !== null) {
    opts.headers['Authorization'] = `Bearer ${token}`
  }

  return fetch(API_ROOT + endpoint, opts).then(response => {
    // Catch internal error.
    if (response.status === 500) {
      console.log(response)
      throw Error('Something went really bad!')
    }

    // Good response data.
    return response.json()
  }).then(json => {
    // Handle user error.
    if (!!json.error) {
      throw Error(json.message)
    }

    return json
  })
}

// Basic domain object request that supports all request method.
export function baseObjectRequest(endpoint) {
  return {
    [GET]: (id) => request(GET, `${endpoint}/${id}`),
    [POST]: (obj) => request(POST, endpoint, obj),
    [PATCH]: (id, obj) => request(PATCH, `${endpoint}/${id}`, obj),
    [DELETE]: (id) => request(DELETE, `${endpoint}/${id}`),
  }
}

// Basic domain search request.
export function baseSearchRequest(endpoint) {
  return (filter = {}) => request(GET, `${endpoint}?${querystring.stringify(filter)}`)
}