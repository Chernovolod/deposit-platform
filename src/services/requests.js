import { API_URL } from 'src/constants'
import { fetchRest } from 'src/utils/asyncUtils'

export const createRequest = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/orders`, 'POST', body, { Authorization: token })
    .then((data) => data)
}

export const getRequests = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/orders?status=${type}`, 'GET', {}, { Authorization: token })
    // .then((data) => data)
}

export const closeRequest = (id, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/orders/status`, 'PATCH', {id, status: 'CLOSED'}, { Authorization: token })
  // .then((data) => data)
}

export const getOffersByOrderId = (id, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/orders/${id}`, 'GET', {}, { Authorization: token })
  // .then((data) => data)
}

export const suggestOffer = (body, token  = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/offers`, 'POST', body, { Authorization: token })
    .then((data) => data)
}

export const getBankRequests = (token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/orders`, 'GET', {}, { Authorization: token })
  // .then((data) => data)
}

export const getCalculatorSuggestions = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/widgets/calculator`, 'GET', {}, { Authorization: token })
  .then((data) => data)
}

export const getSuggestionsFromBusiness = (id, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/offers/${id}`, 'GET', {}, { Authorization: token })
  .then((data) => data)
}

export const getFilteredBankRequests = (type, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/bank/offers?status=${type}`, 'GET', {}, { Authorization: token })
}

export const applySuggestedOffer = (body, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/company/orders/accept`, 'POST', body, { Authorization: token })
}
