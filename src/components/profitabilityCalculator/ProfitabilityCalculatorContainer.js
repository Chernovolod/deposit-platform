import React, { useState, useRef } from 'react'
import {
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import ProfitabilityCalculatorView from './ProfitabilityCalculatorView'
import { useTranslation } from 'react-i18next'
import { getCalculatorSuggestions } from 'src/services'
import { setApprovalModalVisibility } from 'src/store'
import { connect } from 'react-redux'
import RequestAccountApprovalModal from '../requestAccountApprovalModal'
import { applyOffer } from 'src/services'

const ProfitabilityCalculatorContainer = ({ user, setVisible, isApprovalModalShown, ...rest }) => {
  const { t } = useTranslation()
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setLoading] = useState(false)
  const toaster = useRef()
  const [toast, addToast] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentSuggestion, setCurrentSuggestion] = useState({
    id: '', 
    name: '', 
    currency: '', 
    percentage: '', 
    minAmount: '', 
    maxAmount: '', 
    type: '', 
    days: '',
  })
  const [valid, setValid] = useState(true)
  const [summary, setSummary] = useState({
    amount: 0,
    currency: 'BYN',
    percentage: 0,
    days: 90,
    sum: 0
  })
  const [formData, setFormData] = useState({
    amount: 0,
    currency: 'BYN',
    percentage: 0,
    days: 90
  })
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const [modalFormData, setModalFormData] = useState({
    amount: null
  })
  const onModalChange = ({ target: { name, value } }) => {
    const { minAmount, maxAmount } = currentSuggestion
    if ((Number(value) < minAmount && Number(value) !== minAmount) || (Number(value) > maxAmount && Number(value) !== maxAmount)) {
      setValid(false)
    } else {
      setValid(true)
    }
    setModalFormData({
      ...modalFormData,
      [name]: value
    })
  }
  const calculateProfit = async () => {
    if (user.type !== 'BANK_ADMIN' && user.status !== 'VERIFIED') {
      setVisible(true)
      return
    }
    try {
      setLoading(true)
      const { amount, percentage, days, currency } = formData
      const sum = Math.round(Number(amount) * Number(percentage) * Number(days) / 365 / 100)
      setSummary({
        currency,
        amount,
        percentage,
        days,
        sum
      })
      await getSuggestions()
    } catch (e) {

    } finally {
      setLoading(false)
    }
  }
  const getSuggestions = async () => {
    try {
      const data = await getCalculatorSuggestions()
      if (!data.message) {
        setSuggestions(data)
      }
    } catch (e) {

    } finally {

    }
  }
  const closeRequestModal = () => {
    setIsModalVisible(false)
    setValid(true)
  }
  const openRequestModal = ({ target: { dataset: { id } } }) => {
    const [currentRequest] = suggestions.filter(request => request.id === id)
    setModalFormData({
      amount: currentRequest.minAmount
    })
    setCurrentSuggestion(currentRequest)
    setIsModalVisible(true)
  }
  const applyOfferHandler = async (data, id) => {
    try {
      const response = await applyOffer({ ...data, depositId: id })
      if (!response.message) {
        addToast(() => showErrorToast('Заявка успешно отправлена!', false))
      } else {
        addToast(() => showErrorToast())
      }
    } catch (err) {
      addToast(() => showErrorToast())
    } finally {
      setIsModalVisible(false)
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
        <strong className="me-auto">{isError ? t('defaultErrorTitle') : t('congratulations')}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const { amount, percentage, days, currency, sum } = summary
  const propsData = {
    suggestions,
    isLoading,
    amount,
    currency,
    percentage,
    days,
    sum,
    onChange,
    calculateProfit,
    getSuggestions,
    isModalVisible, 
    setIsModalVisible,
    openRequestModal,
    modalFormData,
    valid,
    onModalChange,
    currentSuggestion,
    applyOfferHandler,
    t,
    toast,
    closeRequestModal,
    toaster,
    ...rest
  }
  return (
    <>
      <RequestAccountApprovalModal />
      <ProfitabilityCalculatorView { ...propsData } />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfitabilityCalculatorContainer)
