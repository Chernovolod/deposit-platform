import React, { useEffect, useRef, useState } from 'react'
import SingleRequestView from './SingleRequestView'
import { useTranslation } from 'react-i18next'
import { closeRequest, getOffersByOrderId, applySuggestedOffer, getSuggestionsFromBusiness } from 'src/services'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'
const SingleRequestContainer = ({ setPageMode, specificModeData, userType, ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [bankSuggestions, setBankSuggestions] = useState({order: {id: ''}})
  const onClickHandler = () => {
    setVisible(true)
  }
  useEffect( async () => {
    try {
      setLoading(true)
      if (userType === 'BANK_ADMIN') {
        const data = await getSuggestionsFromBusiness(specificModeData.id)
        setBankSuggestions(data)
      } else {
        const data = await getOffersByOrderId(specificModeData.id)
        setSuggestions(data)
      }
    } catch (e) {
      console.log(e)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }, [specificModeData?.id])
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const showErrorToast = (message = '', isError = true ) => (
    <CToast title={isError ? t('defaultErrorTitle') : 'Ваша заявка на размещение депозита Принята!'} autohide={true}>
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
  const handleApplyOffer = async ({orderId, id}) => {
    try {
      setLoading(true)
      const data = await applySuggestedOffer({orderId, offerId: id})

      if (data.wasCreated) {
        addToast(() => showErrorToast(
          'Данные Вашей Компании переданы в банк для дальнейшей работы, вскоре с Вами свяжется специалист:)\n' +
          '\n' +
          '\n' +
          'Информацию о вкладе вы найдете в активных заявках',
          false))
        setTimeout(() => {
          setPageMode('default', 2)
          setLoading(false)
        }, 2000)
      }
      if (data.message) {
        addToast(() => showErrorToast(data.message))
        setLoading(false)
      }
    } catch (e) {
      setLoading(false)
      addToast(() => showErrorToast())
    }
  }
  const handleCloseRequest = async () => {
    try {
      setLoading(true)
      const data = await closeRequest(specificModeData.id)
      if (!data.message && data.status === 'CLOSED') {
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
    userType,
    suggestions,
    bankSuggestions,
    visible,
    setVisible,
    toaster,
    toast,
    isLoading,
    specificModeData,
    handleApplyOffer,
    handleCloseRequest,
    ...rest
  }

  return (
    <>
      <SingleRequestView {...propsData} />
    </>
  )
}

export default SingleRequestContainer
