import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CButton,
  CCol, CFormControl,
  CListGroupItem, CListGroup,
  CModal,
  CLink,
  CModalBody,
  CModalContent, CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow, CToaster
} from '@coreui/react'
import RegularLoader from 'src/views/components/loaders/regular'
import classnames from 'classnames'

const SingleDepositView = ({
                             isLoading,
                             visible,
                             setVisible,
                             onClickHandler,
                             toast,
                             toaster,
                             handleCloseRequest,
                             specificModeData: { id, orders, status, minAmount, percentage, currency, days, type }
                           }) => {

  const { t } = useTranslation()
  const renderCloseOrderModal = () => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('deposits.specific.modal.title') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-2">
          { t('deposits.specific.modal.content') }
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton disabled={ isLoading } onClick={ handleCloseRequest } className="text-white py-2" size="sm"
                   color="primary">{ isLoading ? <RegularLoader classes="text-white"/> : t('yes') }</CButton>
          <CButton onClick={ () => setVisible(false) } className="py-2" size="sm" color="primary"
                   variant="outline">{ t('no') }</CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )

  return (
    <>
      <CRow
        className={ classnames('align-items-stretch bg-primary rounded-3 m-0 py-4 px-2 text-white', { 'justify-content-between': status === 'CLOSED' }) }>
        <CCol xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.amount') }</small>
          <h6 className="m-0">{ `${ minAmount } ${ currency }` }</h6>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.percentage') }</small>
          <h6 className="d-block">{ `${ percentage } %` }</h6>
        </CCol>
        <CCol xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.days') }</small>
          <h6 className="d-block">{ t(`requests.days.${ days }`) }</h6>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.type') }</small>
          <h6 className="d-block">{ t(`requests.${ type }`) }</h6>
        </CCol>
        <CCol xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.sentRequests') }</small>
          <h6 className="d-block m-0">{ orders.length || 0 }</h6>
        </CCol>
        { status !== 'CLOSED' && <CCol xl={ 2 } xs={ 6 }
                                       className="d-flex align-self-md-center align-self-end justify-content-end justify-content-md-start text-md-start">
          <CLink
            data-id={ id }
            onClick={ onClickHandler }
            className="text-white fw-bold"
            role="button"
          >
            { t('requests.create.form.closeContribution') }
          </CLink>
        </CCol> }
      </CRow>
      <h4 className="mt-5">{ t('deposits.specific.appliedRequests.title') }</h4>
      {!orders.length && <h5 className="text-center mt-5">{ t('requests.BANK_ADMIN.subtitle') }</h5>}
      <CListGroup className="employees mt-4">
        { !!orders.length && (
          orders.map(({ id, type, currency, percentage, days, amount }) => (
            <CListGroupItem key={id} className="employees py-4 px-2 px-md-2">
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
              </CRow>
            </CListGroupItem>
          ))
        ) }
      </CListGroup>
      { renderCloseOrderModal() }
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </>
  )
}

export default SingleDepositView
