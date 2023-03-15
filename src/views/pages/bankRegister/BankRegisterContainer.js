import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import {
  CToast,
  CToastBody,
  CToastHeader
} from '@coreui/react'
import BankRegisterView from './BankRegisterView'
import { connect, useDispatch } from 'react-redux'
import { register } from 'src/store'
import { registerBankCompany } from 'src/services'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const INITIAL_VALIDATION_STATE = {
  isValid: false
}
const DELAY_TIME = 3500
const BankRegisterContainer = ({ isLoggedIn, ...rest }) => {
  const { t } = useTranslation()
  const [isRegistrationCompleted, setCompletedRegistration] = useState(false)
  const [validation, setValidation] = useState(INITIAL_VALIDATION_STATE)
  const [isLoading, setLoading] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [formData, setFormData] = useState({ company: '', email: '' })
  const dispatch = useDispatch()

  const sendRequest = () => {
    return registerBankCompanyHandler()
  }

  const registerBankCompanyHandler = async () => {
    try {
      setLoading(true)
      const { token, message } = await registerBankCompany(formData)

      if (token) {
        setCompletedRegistration(true)
        setTimeout(() => {
          setLoading(false)
          dispatch(register(token))
        }, DELAY_TIME)
      }

      if (message) {
        setLoading(false)
        addToast(() => showErrorToast(message))
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      addToast(() => showErrorToast())
    }
  }

  const onChange = ({ target: { name, value, checked } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
    // if (name && value) validateForm(name, value, checked)
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
    isRegistrationCompleted,
    formData,
    onChange,
    sendRequest,
    validation,
    isLoading,
    toaster,
    toast,
  }
  return (
    <>
      <Helmet>
        <title>Создание аккаунта для Вашего банка</title>
        <meta name="description" content="Зарегистрируйте аккаунт Вашего банка и получите подробную консультацию и презентацию продукта прямо у Вас в офисе. Начните получать все преимущества платформы уже сегодня!"/>
      </Helmet>
      <BankRegisterView {...propsData} />
      {isLoggedIn && <Redirect to="/dashboard" />}
    </>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export default connect(mapStateToProps)(BankRegisterContainer)
