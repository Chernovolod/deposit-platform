import { fetchRest } from '../utils'
import { API_URL } from '../constants'

export const getVerificationInfo = (token) => {
  return fetchRest(`${API_URL}/verification/documents`, 'GET', {}, { Authorization: token })
    .then((data) => data)
}

export const verifyCompany = (token) => {
  return fetchRest(`${API_URL}/verification/documents`, 'POST', { approved: true }, { Authorization: token })
}

export const declineCompany = (body, token) => {
  return fetchRest(`${API_URL}/verification/documents`, 'POST', body, { Authorization: token })
}
