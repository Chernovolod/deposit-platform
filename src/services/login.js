import { API_URL } from 'src/constants'
import { fetchRest } from 'src/utils/asyncUtils'

export const logInBusinessCompany = (body) => {
	return fetchRest(`${API_URL}/business/login`, 'POST', body)
		.then((data) => data)
}

export const logInBank = (body) => {
	return fetchRest(`${API_URL}/bank/login`, 'POST', body)
		.then((data) => data)
}
