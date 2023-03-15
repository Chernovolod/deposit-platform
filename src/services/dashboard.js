import { fetchRest } from '../utils'
import { API_URL } from '../constants'

export const getBusinessStatistic = (token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/dashboard`, 'GET', {}, { Authorization: token })
}

export const getBankBarStatistic = (token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/dashboard`, 'GET', {}, { Authorization: token })
}

export const getBankDonutStatistics = (token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/dashboard`, 'GET', {}, { Authorization: token })
}
