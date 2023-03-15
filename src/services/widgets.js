import { fetchRest } from '../utils'
import { API_URL } from '../constants'

export const getCurrencies = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/widgets/exchange`, 'GET', {}, { Authorization: token })
  // .then((data) => data)
}

export const getRates = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/widgets/rates`, 'GET', {}, { Authorization: token })
  // .then((data) => data)
}
