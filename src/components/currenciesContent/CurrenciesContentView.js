import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CCard,
  CCardBody, CCardImage,
  CCardText,
  CCol, CFormControl,
  CRow, CToaster,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import converter from '../../assets/images/converter.png'
import Loader from '../../views/components/loaders/intermittent'

const CurrenciesContentView = ({ formData, currencies, toaster, toast, onChange, isLoading, history }) => {
  const { t } = useTranslation()
  const setDate = () => {
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
    return `${day}.${month}.${year}`
  }
  return (
    <>
      <CCard>
        <CRow>
          <CCol md={ 7 }>
            <CCardBody className="p-md-5 p-3" >
              <CCol md={10}>
                <h4 className="mb-3">{ t('converter') }</h4>
                <CCardText className="font-size-md text-muted">
                {`${t('currencies.text')} ${setDate()}`}
                </CCardText>
                {isLoading && <Loader classes="mt-5" />}
                { !isLoading && formData.length && [1,2,3,4,5,6].map((element, index) => {
                  return (
                    <div key={element} className="rounded-xl mb-3 align-items-center border-primary ps-0 p-1 d-flex" style={{ border: '1px solid' }}>
                      <CCol xs={4} md={5} xl={4} xxl={3}>
                        <h5 className="ms-3 me-2 text-nowrap my-0 pt-1">{`${currencies[index].amount} ${currencies[index].currency}`}</h5>
                      </CCol>
                      <svg width="2" height="31" viewBox="0 0 2 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0V30.5" stroke="#2F80ED"/>
                      </svg>
                      <CFormControl
                        className="border-0 ms-3"
                        onChange={ onChange }
                        value={ formData[index]?.buy }
                        type="text"
                        data-saved={formData[index]?.saved}
                        name={ formData[index]?.currency }
                      />
                    </div>
                  )
                 }) }
              </CCol>
            </CCardBody>
          </CCol>
          <CCol md={ 5 } className="position-relative">
            <CCardImage style={{objectFit: 'cover'}} className="w-100 h-100" src={ converter }/>
            <Link
              className="pb-4 ps-4 d-none d-md-block white-with-right-arrow text-decoration-none text-white position-absolute bottom-0 start-0 fs-5"
              to="/requests?mode=calculator"
              >
                {t('currencies.link')}
              </Link>
          </CCol>
        </CRow>
      </CCard>
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </>
  )
}

export default CurrenciesContentView
