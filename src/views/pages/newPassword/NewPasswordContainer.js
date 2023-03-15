import React, { useEffect, useRef, useState } from 'react'
import NewPasswordView from './NewPasswordView'
import { useTranslation } from 'react-i18next'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
import { setNewPassword } from 'src/services'
import * as url from 'url'

const NewPasswordContainer = ({ ...rest }) => {
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

  const setNewPasswordHandler = async () => {
    try {
      setLoading(true)
      const urlParams = new URLSearchParams(rest.location.search)
      const token = urlParams.get('token')
      const data = await setNewPassword({password: formData.password, token})
      if (data.wasCreated) {
        addToast(() => showErrorToast(t('toast.modal.changedPasswordText'), false))
        setTimeout(() => rest.history.push('/login'), 2000)
      }
    } catch (e) {
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
    setNewPasswordHandler,
    isLoading,
    toaster,
    toast
  }

  return (
    <>
      <NewPasswordView {...propsData} />
    </>
  )
}

export default NewPasswordContainer
