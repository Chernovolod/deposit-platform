import { createStore } from 'redux'
import { USER_TYPE } from './constants'

const initialState = {
  isApprovalModalShown: false,
  isDefaultPage: true,
  sidebarShow: false,
  user: {
    company: {
      name: ''
    }
  },
  isBankUserType: false,
  isBusinessUserType: false,
  isLoggedIn: !!localStorage.getItem('auth-token'),
  token: ''
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'SET_USER':
      return {...state, user: rest.user, isBankUserType: rest.user.type === USER_TYPE.BANK, isBusinessUserType: rest.user.type === USER_TYPE.BUSINESS }
    case 'LOGIN_SUCCESS':
      localStorage.setItem('auth-token', rest.token)
      return {...state, isLoggedIn: true, token: rest.token}
    case 'LOGOUT':
      localStorage.removeItem('auth-token')
      return {...state, user: {}, isLoggedIn: false, token: ''}
    case 'SET_APPROVAL_MODAL':
      return {...state, isApprovalModalShown: rest.isShown}
    default:
      return state
  }
}

export const register = (token) => ({type: 'LOGIN_SUCCESS', token})
export const logout = () => ({type: 'LOGOUT'})
export const login = (token) => ({type: 'LOGIN_SUCCESS', token})
export const setUser = (user) => ({type: 'SET_USER', user})
export const setApprovalModalVisibility = (isShown) => ({type: 'SET_APPROVAL_MODAL', isShown})

const store = createStore(changeState)
export default store
