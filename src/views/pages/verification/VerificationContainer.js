import React, { useEffect, useRef, useState } from 'react'
import VerificationView from './VerificationView'
import { useTranslation } from 'react-i18next'
import {
  CModal,
  CModalBody,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CToast,
  CToastBody,
  CToastHeader
} from '@coreui/react'
import { getVerificationInfo, verifyCompany, declineCompany } from 'src/services'

const VerificationContainer = ({ ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [isRequestLoading, setRequestLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [verified, setVerified] = useState(true)
  const [token, setToken] = useState('')
  const [photo, setPhoto] = useState({url: '', name: ''})
  const [data, setData] = useState({
    legalInfo: {},
    documents: []
  })
  const [formData, setFormData] = useState({reason: ''})
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  useEffect(async () => {
    const urlParams = new URLSearchParams(rest.location.search)
    const token = urlParams.get('token')

    setToken(token)
    if (token) {
      try {
        setLoading(true)
        const info = await getVerificationInfo(token)
        const dataToSet = {
          legalInfo: {
            email: info.companyAdmin.email,
            phone: info.companyAdmin.phone ? `+${info.companyAdmin.phone}` : '',
            name: t('profile.employees.fullUserName', { ...info.companyAdmin.fields }).trim(),
          },
          documents: info.companyAdmin.documents
        }
        const asArr = Object.entries(dataToSet.legalInfo)
        const filtered = asArr.filter(([key, val]) => val)
        const asObj = Object.fromEntries(filtered)
        setData({ ...dataToSet, legalInfo: asObj })
      } catch (e) {
        addToast(() => showErrorToast())
      } finally {
        setLoading(false)
      }
    }
  }, [])
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const sendCancellation = async () => {
    if (!formData.reason) {
      setVerified(false)
    } else {
      setVerified(true)
      try {
        setRequestLoading(true)
        const res = await declineCompany({...formData, approved: false}, token)
        if (res.message) addToast(() => showErrorToast(res.message))
        if (res.wasCreated) addToast(() => showErrorToast('Заявка была отклонена', false))
      } catch (e) {
        addToast(() => showErrorToast())
      } finally {
        setRequestLoading(false)
      }
    }
  }
  const sendApprove = async () => {
    setVerified(true)
    try {
      setRequestLoading(true)
      const res = await verifyCompany(token)
      if (res.message) addToast(() => showErrorToast(res.message))
      if (res.wasCreated) addToast(() => showErrorToast('Верификация прошла успешно', false))
    } catch (e) {
      addToast(() => showErrorToast())
    } finally {
      setRequestLoading(false)
    }
  }
  const openPhoto = ({target: { dataset: {url, name} }}) => {
    setPhoto({name, url})
    setVisible(true)
  }
  const renderEditModal = () => (
    <CModal size="xl" alignment="center" visible={visible} onDismiss={() => setVisible(false)}>
      <CModalContent className="pb-3 px-1 px-md-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle component="h2">{photo.name}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <img className="w-100" src={photo.url} alt=""/>
        </CModalBody>
      </CModalContent>
    </CModal>
  )
  const showErrorToast = (message = '', isError = true) => (
    <CToast title={isError ? t('defaultErrorTitle') : ''} autohide={true}>
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
        <strong className="me-auto">{isError ? t('defaultErrorTitle') : ''}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const propsData = {
    ...rest,
    onChange,
    sendCancellation,
    sendApprove,
    openPhoto,
    isLoading,
    isRequestLoading,
    verified,
    toaster,
    toast,
    data
  }

  return (
    <>
      <VerificationView {...propsData} />
      {renderEditModal()}
    </>
  )
}

export default VerificationContainer
