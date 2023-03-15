import React, { useState, useRef, useEffect } from 'react'
import {
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import OffersView from './OffersView'

import { getOffers, applyOffer } from 'src/services'
import RequestAccountApprovalModal from '../../components/requestAccountApprovalModal'
import { connect } from 'react-redux'
import { setApprovalModalVisibility } from '../../store'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const OffersContainer = ({ isApprovalModalShown, user, setVisible, ...rest }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [offersList, setOffersList] = useState([])
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  useEffect(async () => {
    try {
      setLoading(true)
      const offersList = await getOffers()

      setOffersList([...offersList])
    } catch (error) {
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }, [])

  const applyOfferHandler = async (data, id) => {
    try {
      const response = await applyOffer({ ...data, depositId: id })
      if (!response.message) {

        addToast(() => showErrorToast('Данные Вашей Компании переданы в банк для дальнейшей работы, вскоре с Вами свяжется специалист:)\n' +
          '\n' +
          'Информацию о вкладе вы найдете в ', false))
      } else {
        addToast(() => showErrorToast())
      }
    } catch (err) {
      addToast(() => showErrorToast())
    } finally {
    }
  }

  const showErrorToast = (message = '', isError = true) => (
    <CToast title={ isError ? t('defaultErrorTitle') : 'Ваша заявка на размещение депозита Принята!' }
            autohide={ true }>
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
      <CToastBody>
        { (message &&
          <>
            { message }
            <Link to={{pathname: '/requests', query: {mode: 'default', tab: 2}}}>активных заявках</Link>
          </>)
        || t('default400Error') }</CToastBody>
    </CToast>
  )

  const propsData = {
    setApprovalModalVisible: setVisible,
    user,
    applyOfferHandler,
    loading,
    offersList,
    toaster,
    toast,
    ...rest
  }

  return (
    <>
      <Helmet>
        <title>Предложения от банков | Deposit Platform</title>
      </Helmet>
      <RequestAccountApprovalModal/>
      <OffersView { ...propsData } />
    </>
  )
}
const mapStateToProps = ({ isApprovalModalShown, user }) => ({
  isApprovalModalShown,
  user
})

const mapDispatchToProps = (dispatch) => ({
  setVisible: isShown => dispatch(setApprovalModalVisibility(isShown)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer)
