import { API_URL } from 'src/constants/Api'
import { fetchRest } from '../utils/asyncUtils'

export const registerNewBusinessCompany = (body) => {
	return fetchRest(`${API_URL}/business/register`, 'POST', body)
	  .then((data) => data)
	  .catch((error) => console.log(error))
}

export const registerBankCompany = (body) => {
	return fetchRest(`${API_URL}/bank/register`, 'POST', body)
		.then((data) => data)
		.catch((error) => console.log(error))
}

export const linkUserToExistingCompany = (body) => {
	return fetchRest(`${API_URL}/business/link`, 'POST', body)
	.then((data) => data)
}

export const getAllCompanies = () => {
	return fetchRest(`${API_URL}/business/companies`, 'GET')
	.then((data) => data)
}
