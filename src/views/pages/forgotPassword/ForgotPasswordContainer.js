import React, { useRef, useState } from 'react'
import ForgotPasswordView from './ForgotPasswordView'
import { useTranslation } from 'react-i18next'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
import { sendLinkToForgottenEmail } from 'src/services'

const ForgotPasswordContainer = ({ ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const forgotHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = await sendLinkToForgottenEmail(formData)
      if (data.wasCreated) {
        addToast(() => showErrorToast(t('toast.modal.instruction.restorePasswordText'), false))
        setTimeout(() => rest.history.push('/login'), 3000)
      }
      if (data?.message) {
        addToast(() => showErrorToast(data.message))
      }
    } catch (e) {
      console.log(e)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }
  const showErrorToast = (message = '', isError = true) => (
    <CToast title={isError ? t('defaultErrorTitle') : t('congratulations')} autohide={true}>
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
        <strong className="me-auto">{isError ? t('defaultErrorTitle') : t('thanks')}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const propsData = {
    ...rest,
    onChange,
    forgotHandler,
    isLoading,
    toaster,
    toast
  }

  return (
    <>
      <ForgotPasswordView {...propsData} />
    </>
  )
}

export default ForgotPasswordContainer
