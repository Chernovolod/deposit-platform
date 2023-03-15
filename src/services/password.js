import { API_URL } from 'src/constants'
import { fetchRest } from 'src/utils/asyncUtils'

export const sendLinkToForgottenEmail = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/password/request`, 'POST', body, { Authorization: token })
    .then((data) => data)
}

export const setNewPassword = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/password/reset`, 'POST', body, { Authorization: token })
    .then((data) => data)
}
