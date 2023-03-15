import React, { useState, useEffect, useRef } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionCollapse,
  CAccordionItem, CRow, CCol,
  CToast, CToastBody, CToaster,
  CToastHeader
} from '@coreui/react'
import { getCurrencies } from 'src/services'
import { useTranslation } from 'react-i18next'
import RegularLoader from '../../views/components/loaders/regular'
import { Link } from 'react-router-dom'

export const ExchangeDropdown = ({ title, history }) => {
  const [isLoading, setLoading] = useState(false)
  const [currencies, setCurrencies] = useState([])
  const [activeKey, setActiveKey] = useState(0)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const { t } = useTranslation()

  const getCurrencyHandler = async () => {
    try {
      // setLoading(true)
      const data = await getCurrencies()
      if (data.length && !data.message) {
        setCurrencies(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  useEffect(getCurrencyHandler, [])
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
  const onShowClick = async () => {
    setActiveKey(1)
    await getCurrencyHandler()
  }
  const setContent = () => {
    if (isLoading) return <RegularLoader />
    return (
      <>
        {
          currencies.length ?
          <>
            <CRow className="m-0 mb-2 ps-2">
              <CCol xs={6} className="p-0" xl={6}>{t('dashboard.exchangeDropdown.currency')}</CCol>
              <CCol className="p-0 pe-1" xl={6}>{t('dashboard.exchangeDropdown.nationalCourse')}</CCol>
            </CRow>
            {
              currencies.map(({ currency, amount, sell, buy }) => (
                <CRow key={currency} className="m-0 ps-2">
                  <CCol xs={6} className="p-0" xl={6}>{`${amount} ${currency}`}</CCol>
                  <CCol className="p-0 pe-1" xl={6}>{buy}</CCol>
                </CRow>
              ))
            }
          </> :
          <span>
            {t('dashboard.exchangeDropdown.noInfo')}
          </span>
        }
        <div className="text-end mt-3">
          <Link
            className="text-white text-decoration-none fw-bold"
            to='/dashboard?mode=currencies'
          >
            {t('converter')}
          </Link>
        </div>
      </>
    )

  }
  return (
    <>
      <CAccordion className="info-dropdown mt-3">
        <CAccordionItem className="mb-3">
          <h4>
            <CAccordionButton
              className="text-white px-2 ps-3"
              collapsed={activeKey !== 1}
              onClick={() =>
                activeKey === 1 ? setActiveKey(0) : onShowClick()
              }
            >
              {title}
            </CAccordionButton>
          </h4>
          <CAccordionCollapse visible={activeKey === 1}>
            <CAccordionBody className="widget p-2">
              {setContent()}
            </CAccordionBody>
          </CAccordionCollapse>
        </CAccordionItem>
      </CAccordion>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}
