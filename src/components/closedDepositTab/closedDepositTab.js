import React from 'react'
import {
  CToaster,
  CCard,
  CCol,
  CRow,
  CLink,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CButton
} from '@coreui/react'
import { useTranslation } from 'react-i18next';

const ClosedDepositTab = ({ closedDeposits, isNewRequestTab, setVisible, setPageMode, setSpecificModeData }) => {
  const { t } = useTranslation()
  const onClickHandler = ({ target: { dataset: { id } } }) => {
    if (isNewRequestTab) {
      setVisible(true)
    } else {
      setPageMode('specific')
      setSpecificModeData(id, true)
    }
  }
  const renderClosedRequestsList = () => closedDeposits.map(({
                                                               id,
                                                               percentage,
                                                               minAmount,
                                                               maxAmount,
                                                               days,
                                                               currency,
                                                               type
                                                             }) => {
    return (
      <CListGroupItem className="employees py-4 px-2 px-md-3" key={ id }>
        <CRow className="m-0 justify-content-between align-items-stretch">
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 1 }>
            <small className="text-muted">{ t('requests.create.form.percentage') }</small>
            <span className="d-block">{ `${ percentage } %` }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.days') }</small>
            <span className="d-block">{ t(`requests.days.${ days }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.type') }</small>
            <span className="d-block">{ t(`requests.${ type }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.minimalAmount') }</small>
            <span className="d-block">{ `${ minAmount } ${ currency }` }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{t('requests.create.form.maximumAmount')}</small>
            <span className="d-block">{ `${ maxAmount } ${ currency }` }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end align-self-md-center align-self-end text-md-start" xs={ 6 } xl={ 2 }>
            <CLink
              data-id={ id }
              onClick={ onClickHandler }
              role="button"
            >
              {t('deposits.actionDeposit.button')}
            </CLink>
          </CCol>
        </CRow>
      </CListGroupItem>
    )
  })

  if (!closedDeposits.length) {
    return <h4 className="text-center mt-5">{ t('deposits.closed.empty')}</h4>
  }

  return (
    <>
      <CListGroup className="employees mt-4">{ renderClosedRequestsList() }</CListGroup>
    </>
  )
}

export default ClosedDepositTab
