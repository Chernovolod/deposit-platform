import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import LoginView from './LoginView'
import { logInBusinessCompany } from 'src/services'
import { connect, useDispatch } from 'react-redux'
import { login } from 'src/store'
import { Helmet } from 'react-helmet'

const LoginContainer = ({ isLoggedIn, ...rest }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const logInHandler = async () => {
    try {
      setLoading(true)
      const { token, message } = await logInBusinessCompany(formData)
      if (token) {
        setLoading(false)
        dispatch(login(token))
      }

      if (message) {
        setLoading(false)
        addToast(() => showErrorToast(message))
      }
    } catch (error) {
      setLoading(false)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const showErrorToast = (message = '') => (
    <CToast title={t('defaultErrorTitle')} autohide={true}>
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#EB5757"></rect>
        </svg>
        <strong className="me-auto">{t('defaultErrorTitle')}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const propsData = {
    ...rest,
    onChange,
    logInHandler,
    isLoading,
    toaster,
    toast
  }

  return (
    <>
      <Helmet>
        <title>Войти в аккаунт | Deposit Platform</title>
      </Helmet>
      <LoginView {...propsData} />
      {isLoggedIn && <Redirect to="/dashboard" />}
    </>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export default connect(mapStateToProps)(LoginContainer)
