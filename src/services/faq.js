import { API_URL } from 'src/constants/Api'
import { fetchRest } from 'src/utils/asyncUtils'

export const sendQuestion = (body, token = localStorage.getItem('auth-token')) => {
  return fetchRest(`${API_URL}/feedback`, 'POST', body, {Authorization: token})
    .then((data) => data)
    .catch((error) => console.log(error))
}
