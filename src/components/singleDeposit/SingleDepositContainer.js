import React, { useRef, useState } from 'react'
import SingleDepositView from './SingleDepositView'
import { useTranslation } from 'react-i18next'
import { closeDeposit } from 'src/services'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
const SingleDepositContainer = ({ setPageMode, specificModeData, ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const onClickHandler = () => {
    setVisible(true)
  }
  const [toast, addToast] = useState(0)
  const toaster = useRef()
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
  const handleCloseRequest = async () => {
    try {
      setLoading(true)
      const data = await closeDeposit(specificModeData.id)
      if (!data.message) {
        setPageMode('default')
      }
      if (data.message) {
        addToast(() => showErrorToast(data.message))
      }
    } catch (e) {
      setLoading(false)
      addToast(() => showErrorToast())
    }
    finally {
      setLoading(false)
      setVisible(false)
    }
  }
  const propsData = {
    onClickHandler,
    visible,
    setVisible,
    toaster,
    toast,
    isLoading,
    specificModeData,
    handleCloseRequest,
    ...rest
  }
  return (
    <>
      <SingleDepositView {...propsData} />
    </>
  )
}

export default SingleDepositContainer
