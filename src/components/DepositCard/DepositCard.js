import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { useTranslation } from 'react-i18next';

const STATUSES_MAP = {
  ACTIVE: 'Активный',
  CLOSED: 'Закрытый',
  CREATED: 'Новый'
}
const DepositCard = ({ onClick, data: { revenue, amount, status, currency, type, percentage, days, index } }) => {
  const { t } = useTranslation()
  const cardColor = status === 'CREATED' ? '#3181ED' : '#F6F6F6'
  const textColor = status === 'CREATED' ? '#FFF' : '#333'
  const helperTextColor = status === 'CREATED' ? '#E0E0E0' : '#828282'

  return (
    <>
      <CCol md={4} className="mb-5 px-3">
        <CCard onClick={onClick} className="p-2" style={{backgroundColor: cardColor, color: textColor, cursor: 'pointer'}}>
          <CCardHeader className="d-flex align-items-stretch border-bottom-0 bg-transparent">
            <CCol className="text-start" xs={ 6 } xl={ 6 }>
              <h6>{`${STATUSES_MAP[status]} ${t('requests.create.header.contribution').toLowerCase()}`}</h6>
            </CCol>
            <CCol className="text-end" xs={ 6 } xl={ 6 }>
              <small style={ {color: helperTextColor } }>{ t('requests.create.form.amount') }</small>
              <h6 className="m-0">{ `${ amount } ${ currency }` }</h6>
            </CCol>
          </CCardHeader>
          <CCardBody className="pt-0">
            <hr className="m-0" />
            <CRow className="mt-3">
              <CCol className="text-start" xs={ 6 } xl={ 6 }>
                <small style={ {color: helperTextColor } }>{ t('requests.create.form.percentage') }</small>
                <span className="d-block">{ `${ percentage } %` }</span>
              </CCol>
              <CCol className="text-end" xs={ 6 } xl={ 6 } >
                <small style={ {color: helperTextColor } }>{ t('requests.create.form.days') }</small>
                <span className="d-block">{ t(`requests.days.${ days }`) }</span>
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol className="text-start" xs={ 6 } xl={ 6 }>
                <small style={ {color: helperTextColor } }>{ t('requests.create.form.type') }</small>
                <span className="d-block">{ t(`requests.${ type }`) }</span>
              </CCol>
              <CCol className="text-end" xs={ 6 } xl={ 6 }>
                <small style={ {color: helperTextColor } }>{t('requests.create.form.revenue')}</small>
                <span className="d-block">{ `${ revenue } ${ currency }` }</span>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default DepositCard
