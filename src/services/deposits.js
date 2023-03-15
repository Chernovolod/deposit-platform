import { fetchRest } from '../utils'
import { API_URL } from '../constants'

export const createDeposit = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/deposits`, 'POST', body, { Authorization: token })
    .then((data) => data)
}

export const getDeposits = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/deposits?status=${type}`, 'GET', {}, { Authorization: token })
  // .then((data) => data)
}

export const closeDeposit = (depositId, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/deposits`, 'PATCH', {depositId, status: 'CLOSED'}, { Authorization: token })
}
