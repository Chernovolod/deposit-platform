import { fetchRest } from '../utils'
import { API_URL } from '../constants'

export const getOffers = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/business/deposits`, 'GET', {}, { Authorization: token })
}

export const applyOffer = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/business/deposits/accept`, 'POST', body, { Authorization: token })
    .then((data) => data)
}
