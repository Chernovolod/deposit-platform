import React, { useRef, useState } from 'react'
import LandingView from './LandingView'
import { useTranslation } from 'react-i18next'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
import { Helmet } from 'react-helmet'

const LandingContainer = ({ ...rest }) => {
  const { t } = useTranslation()
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [visible, setVisible] = useState(false)
  const [valid, setValid] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: ''
  })
  const [isBusinessFunctionality, setBusinessFunctionality] = useState(true)

  const onChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = re.test(String(value).toLowerCase())
      if (isEmailValid) {
        setValid(true)
      } else setValid(false)
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onSubmit = () => {
    addToast(() => showErrorToast(t('toast.modal.send.question.successText'), false))
  }
  const showErrorToast = (message = '', isError = true) => (
    <CToast title={isError ? t('defaultErrorTitle') : t('thanks')} autohide={true}>
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
          <rect width="100%" height="100%" fill={ isError ? '#EB5757' : '#6FCF97' }></rect>
        </svg>
        <strong className="me-auto">{ isError ? t('defaultErrorTitle') : t('congratulations') }</strong>
      </CToastHeader>
      <CToastBody>{ message || t('default400Error') }</CToastBody>
    </CToast>
  )
  const propsData = {
    ...rest,
    isBusinessFunctionality,
    setBusinessFunctionality,
    valid,
    visible,
    setVisible,
    onChange,
    isLoading,
    formData,
    onSubmit,
    toaster,
    toast
  }

  return (
    <>
      <Helmet>
        <title>{isBusinessFunctionality
          ? 'Бесплатное создание заявок на размещение депозитов на своих условиях | depl.by'
          : 'Платформа для банков с заявками на размещение депозитов от юридических лиц | depl.by'}
        </title>
        <meta name="description"
              content={`${isBusinessFunctionality
                  ? 'Создайте заявку на размещение Депозита на Своих Условиях и получите отклик от всех банков Беларуси! Быстро, Надежно и Совершенно Бесплатно - depl.by'
                  : 'На нашей платформе вы найдете горячие заявки на размещение депозитов. Размещайте предложения вашего банка и откликайтесь на реальные заявки от Юридических лиц - depl.by'}`}/>
      </Helmet>
      <LandingView { ...propsData } />
    </>
  )
}

export default LandingContainer
