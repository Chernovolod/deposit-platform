import React from 'react'
import {
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { useTranslation } from 'react-i18next';

const ClosedRequestsTab = ({ closedRequests, isBankUserType }) => {
  const { t } = useTranslation()
  const renderClosedRequestsList = () => closedRequests.map(({
                                                               id,
                                                               percentage,
                                                               amount,
                                                               days,
                                                               currency,
                                                               type,
                                                               revenue
                                                             }) => {
    return (
      <CListGroupItem className="employees py-4 px-2 px-md-3" key={ id }>
        <CRow className="m-0 align-items-stretch justify-content-between">
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.amount') }</small>
            <h6 className="m-0">{ `${ amount } ${ currency }` }</h6>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.percentage') }</small>
            <span className="d-block">{ `${ percentage } %` }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.days') }</small>
            <span className="d-block">{ t(`requests.days.${ days }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.type') }</small>
            <span className="d-block">{ t(`requests.${ type }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">Прибыль</small>
            <span className="d-block">{revenue} {currency}</span>
          </CCol>
        </CRow>
      </CListGroupItem>
    )
  })

  return (
    <>
      { closedRequests.length
        ? (
          <CListGroup className="employees mt-4">
            { renderClosedRequestsList() }
          </CListGroup>
        )
        : <h4 className="text-center mt-5">{ isBankUserType ? t('requests.history.empty') : t('requests.business.history.empty') }</h4>
      }
    </>
  )
}

export default ClosedRequestsTab
