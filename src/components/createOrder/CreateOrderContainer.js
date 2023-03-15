import React, { useRef, useState, useEffect } from 'react'
import CreateOrderView from './CreateOrderView'
import { useTranslation } from 'react-i18next'
import { createRequest } from 'src/services'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
import { setApprovalModalVisibility } from 'src/store'
import { connect } from 'react-redux'
import RequestAccountApprovalModal from '../requestAccountApprovalModal'

const CreateOrderContainer = ({ user, setVisible, isApprovalModalShown, setPageMode, ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [currency, setCurrency] = useState('BYN')
  const [isEmptyPercentage, setIsEmptyPercentage] = useState(false)
  const [isCorrectPercentage, setIsCorrectPercentage] = useState(false)
  const [isCorrectAmount, setIsCorrectAmount] = useState(false)
  const [isLessAmount, setIsLessAmount] = useState(false)
  const [toast, addToast] = useState(0)
  const [formData, setFormData] = useState({
    amount: null,
    currency: 'BYN',
    percentage: null,
    days: 90,
    type: 'IRREVOCABLE',
    activeUntil: '2021-07-28T13:05:57.385Z'
  })
  const toaster = useRef()
  const handleCreateRequest = async () => {
    if (user.type !== 'BANK_ADMIN' && user.status !== 'VERIFIED') {
      setVisible(true)
      return
    }
    try {
      setLoading(true)
      if(formData.amount < 50 || formData.amount === null ) {
        setIsLessAmount(true)
        setIsCorrectAmount(false)
        return
      } else {
        setIsLessAmount(false)
        setIsCorrectAmount(true)
      }
      if(formData.percentage <= 0) {
        setIsEmptyPercentage(true)
        setIsCorrectPercentage(false)
        return
      } else {
        setIsEmptyPercentage(false)
        setIsCorrectPercentage(true)
      }
      const data = await createRequest(formData)
      if (data.message) {
        addToast(() => showErrorToast(data.message))
      }
      if (!data.message) {
        setPageMode('default')
      }
    } catch (error) {
      console.log(error)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }
  const onChange = ({ target: { name, value } }) => {
    if (name === 'currency') {
      setCurrency(value)
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onDateInputChange = (day) => {
    setFormData({
      ...formData,
      day
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
    isApprovalModalShown,
    setVisible,
    handleCreateRequest,
    onDateInputChange,
    formData,
    onChange,
    isLoading,
    toaster,
    toast,
    isLessAmount,
    isEmptyPercentage,
    isCorrectPercentage,
    isCorrectAmount,
    currency,
    ...rest
  }
  return (
    <>
      <RequestAccountApprovalModal />
      <CreateOrderView {...propsData} />
    </>
  )
}

const mapStateToProps = ({isApprovalModalShown, user}) => ({
  isApprovalModalShown,
  user
})

const mapDispatchToProps = (dispatch) => ({
  setVisible: isShown => dispatch(setApprovalModalVisibility(isShown)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderContainer)
