import React, { useState, useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {
  CToast,
  CToastBody,
  CToastHeader
} from '@coreui/react'
import RegisterView from './RegisterView'
import { connect, useDispatch } from 'react-redux'
import { register } from 'src/store'
import { registerNewBusinessCompany, linkUserToExistingCompany, getAllCompanies } from 'src/services'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const INITIAL_FORM_DATA = {
  newAccount: {
    email: '',
    company: '',
    checkedAgreement: false
  },
  existingCompany: {
    company: '',
    firstName: '',
    lastName: '',
    middleName: '',
    checkedAgreement: false
  }
}
const INITIAL_VALIDATION_STATE = {
  isValid: false,
  newAccount: {},
  existingCompany: {}
}
const DELAY_TIME = 3500
const RegisterContainer = ({ isLoggedIn, ...rest }) => {
  const { t } = useTranslation()
  const [companiesList, setCompaniesList] = useState([])
  const [suggestionsList, setSuggestionsList] = useState([])
  const [isRegistrationCompleted, setCompletedRegistration] = useState(false)
  const [validation, setValidation] = useState(INITIAL_VALIDATION_STATE)
  const [isLoading, setLoading] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [registrationMode, toggleRegistrationMode] = useState('initial')
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const dispatch = useDispatch()
  useEffect(async () => {
    if (registrationMode === 'existingCompany') {
      const companies = await getAllCompanies() //TODO если запрос не прошел или получен пустой список, дизейблить инпут, во время загрузки лоадер внутри
      setCompaniesList([...companies])
    }
  }, [registrationMode])
  const setRegistrationMode = ({ target: { dataset } }) => {
    const { registrationMode } = dataset

    toggleRegistrationMode(registrationMode)
  }
  const sendRequest = () => {
    return registrationMode === 'newAccount'
      ? registerNewBusinessCompanyHandler()
      : connectToExistingCompanyHandler()
  }
  const connectToExistingCompanyHandler = async () => {
    const requestData = {
      ...formData,
      [registrationMode]: {
        ...formData[registrationMode],
        companyId: companiesList.filter(company => company.name === formData[registrationMode].company)[0].id
      }
    }
    delete requestData[registrationMode].checkedAgreement
    delete requestData[registrationMode].company

    try {
      setLoading(true)
      const { token, message } = await linkUserToExistingCompany(requestData[registrationMode])
      if (message) {
        setLoading(false)
        addToast(() => showErrorToast(message))
      }
      if (!message || token) setCompletedRegistration(true)
    } catch (error) {
      setLoading(false)
      addToast(() => showErrorToast())
    }
  }
  const registerNewBusinessCompanyHandler = async () => {
    const requestData = {
      ...formData,
      [registrationMode]: {
        ...formData[registrationMode]
      }
    }
    delete requestData[registrationMode].checkedAgreement
    try {
      setLoading(true)
      const res = await registerNewBusinessCompany(requestData[registrationMode])
      if (res?.token) {
        setCompletedRegistration(true)
        setTimeout(() => {
          setLoading(false)
          dispatch(register(res.token))
        }, DELAY_TIME)
      }

      if (res.message) {
        setLoading(false)
        addToast(() => showErrorToast(res.message))
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      addToast(() => showErrorToast())
    }
  }
  const validateForm = (name, value, checked) => {
    if (name === 'email') {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = re.test(String(value).toLowerCase())
      if (isEmailValid) {
        setValidation({
          ...validation,
          isValid: true,
          [registrationMode]: {
            ...validation[registrationMode],
            email: true
          }
        })
      } else {
        setValidation({
          ...validation,
          isValid: false,
          [registrationMode]: {
            ...validation[registrationMode],
            email: false
          }
        })
      }
    } else if (registrationMode === 'existingCompany' && name === 'company') {
      if (companiesList.filter(company => company.name === (value.trim() || formData[registrationMode].company)).length) {
        setValidation({
          ...validation,
          isValid: true,
          [registrationMode]: {
            ...validation[registrationMode],
            company: true
          },
        })
      } else {
        setValidation({
          ...validation,
          isValid: false,
          [registrationMode]: {
            ...validation[registrationMode],
            company: false
          },
        })
      }
    } else if ((value.trim() || checked) && (validation[registrationMode]?.email || validation[registrationMode]?.company)) {
      setValidation({
        ...validation,
        isValid: true,
        [registrationMode]: {
          ...validation[registrationMode]
        }
      })
    } else {
      setValidation({
        ...validation,
        isValid: false,
        [registrationMode]: {
          ...validation[registrationMode]
        }
      })
    }
  }
  const getSuggestionValue = suggestion => suggestion.name;
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : companiesList.filter(company =>
      company.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }
  const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    setFormData({
      ...formData,
      [registrationMode]: {
        ...formData[registrationMode],
        companyId: suggestion.id,
        company: suggestionValue
      }
    })
    validateForm('company', suggestionValue)
    setSuggestionsList([])
  }
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsList(getSuggestions(value))
  }
  const onChange = ({ target: { name, value, checked } }) => {
    setFormData({
      ...formData,
      [registrationMode]: {
        ...formData[registrationMode],
        [name]: value || checked
      }
    })
    if (name && value) validateForm(name, value, checked)
  }
  const goBack = () => {
    setFormData(INITIAL_FORM_DATA)
    setValidation(INITIAL_VALIDATION_STATE)
    toggleRegistrationMode('initial')
  }
  const showErrorToast = (message = '') => (
    <CToast title={ t('defaultErrorTitle') } autohide={ true }>
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
        <strong className="me-auto">{ t('defaultErrorTitle') }</strong>
      </CToastHeader>
      <CToastBody>{ message || t('default400Error') }</CToastBody>
    </CToast>
  )
  const propsData = {
    ...rest,
    registrationMode,
    isRegistrationCompleted,
    onSuggestionSelected,
    getSuggestionValue,
    onSuggestionsFetchRequested,
    suggestions: suggestionsList,
    companiesList,
    setRegistrationMode,
    formData,
    onChange,
    sendRequest,
    goBack,
    validation,
    isLoading,
    toaster,
    toast,
  }
  return (
    <>
      <Helmet>
        <title>Создать бесплатный аккаунт юридического лица</title>
        <meta name="description"
              content="Создайте новый бизнес-аккаунт или присоединитесь к существующей компании. Быстро, надежно и совершенно бесплатно!"/>
      </Helmet>
      <RegisterView { ...propsData } />
      { (isLoggedIn && registrationMode !== 'existingCompany') && <Redirect to="/dashboard"/> }
    </>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export default connect(mapStateToProps)(RegisterContainer)
