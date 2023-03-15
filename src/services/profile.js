import { API_URL } from 'src/constants'
import { fetchRest, handleHTTPErrors } from '../utils/asyncUtils'

export const getEmployeesList = (token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile/users`, 'GET', {}, { Authorization: token})
	.then((data) => data)
}

export const updateCandidate = (body, token = localStorage.getItem('auth-token')) => {
    return fetchRest(`${API_URL}/profile/link/update`, 'POST', body, { Authorization: token })
}

export const getDocumentsList = (token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile/documents`, 'GET', {}, { Authorization: token })
}

export const getBusinessCompanyData = (unp) => {
	return fetchRest(`${API_URL}/external/egr/${unp}`, 'GET', {})
}

export const uploadDocument = async (body, token = localStorage.getItem('auth-token')) => {
	try {
		let config = {
			method: 'POST',
			cache: 'no-store',
			headers: {
				Authorization: token,
				pragma: 'no-cache',
				'cache-control': 'no-store',
			},
			body
		}

		const response = await fetch(`${API_URL}/profile/upload`, config)
		return handleHTTPErrors(response, {isJson: true})
	} catch (e) {
		throw e
	}
}

export const deleteDocument = async (id, token = localStorage.getItem('auth-token')) => {
	try {
		let config = {
			method: 'DELETE',
			cache: 'no-store',
			headers: {
				Authorization: token,
				pragma: 'no-cache',
				'cache-control': 'no-store',
			}
		}

		const response = await fetch(`${API_URL}/profile/documents/${id}`, config)
		return handleHTTPErrors(response, {isJson: true})
	} catch (e) {
		console.log({e})
		throw e
	}}

export const getUserInfo = (token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile`, 'GET', {}, { Authorization: token })
}

export const updateContactData = (body, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/profile/update`, 'POST', body, { Authorization: token })
}

export const updatePassword = (body, token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile/update/password`, 'POST', body, { Authorization: token })
}

export const linkEmployee = (body, token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile/link/create`, 'POST', body, { Authorization: token })
}

export const verifyUser = (body, token = localStorage.getItem('auth-token')) => {
	return fetchRest(`${API_URL}/profile/verification`, 'POST', body, { Authorization: token })
}
