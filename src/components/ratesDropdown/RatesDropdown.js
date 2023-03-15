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
import { getRates } from 'src/services'
import { useTranslation } from 'react-i18next'
import RegularLoader from '../../views/components/loaders/regular'
import { Link } from 'react-router-dom'

export const RatesDropdown = ({ title }) => {
  const [isLoading, setLoading] = useState(false)
  const [rates, setRates] = useState([])
  const [activeKey, setActiveKey] = useState(0)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const { t } = useTranslation()

  const getRatesHandler = async () => {
    try {
      // setLoading(true)
      const data = await getRates()
      if (data.length && !data.message) {
        setRates(data)
      }
    } catch (e) {
      console.log(e)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }
  useEffect(getRatesHandler, [])
  const showErrorToast = (message = '') => (
    <CToast title={ t('defaultErrorTitle') } autohide={ true }>
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
        <strong className="me-auto">{ t('defaultErrorTitle') }</strong>
      </CToastHeader>
      <CToastBody>{ message || t('default400Error') }</CToastBody>
    </CToast>
  )
  const onShowClick = async () => {
    setActiveKey(1)
    await getRatesHandler()
  }
  const setContent = () => {
    if (isLoading) return <RegularLoader />
    if (rates.length) {
      return (
        <>
          <CRow className="m-0 mb-2 ps-2">
            <CCol xs={4} className="p-0" xl={4}>{t('dashboard.dropdown.currency')}</CCol>
            <CCol xs={4} className="p-0 pe-1 text-end" xl={4}>{t('dashboard.dropdown.rate')}</CCol>
          </CRow>
          {rates.map(({currency, rate }) => (
            <CRow key={currency} className="m-0 ps-2">
              <CCol xs={5} className="p-0" xl={5}>{currency}</CCol>
              <CCol xs={4} className="p-0 pe-1 text-start" xl={4}>{`${rate}`}</CCol>
            </CRow>
          ))}
        </>
      )
    }
  }
  return (
    <>
      <CAccordion className="info-dropdown">
        <CAccordionItem className="mb-3">
          <h4>
            <CAccordionButton
              className="text-white px-2 ps-3"
              collapsed={ activeKey !== 1 }
              onClick={ () =>
                activeKey === 1 ? setActiveKey(0) : onShowClick()
              }
            >
              { title }
            </CAccordionButton>
          </h4>
          <CAccordionCollapse visible={ activeKey === 1 }>
            <CAccordionBody className="widget p-2">
              {setContent()}
            </CAccordionBody>
          </CAccordionCollapse>
        </CAccordionItem>
      </CAccordion>
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </>
  )
}
