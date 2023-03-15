import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CButton,
  CCol, CListGroupItem,
  CModal,
  CModalBody,
  CModalContent, CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CRow, CToaster, CListGroup
} from '@coreui/react'
import RegularLoader from 'src/views/components/loaders/regular'
import classnames from 'classnames'
import Loader from '../../views/components/loaders/intermittent'

const SingleRequestView = ({
                             userType,
                             isLoading,
                             visible,
                             toaster,
                             toast,
                             setVisible,
                             onClickHandler,
                             suggestions,
                             handleCloseRequest,
                             specificModeData,
                             handleApplyOffer,
                             bankName,
                             bankSuggestions: { order }
                           }) => {
  const { t } = useTranslation()
  const { id, amount, percentage, currency, days, type, status, revenue } = specificModeData


  const renderBankSuggestion = () => (
    <CListGroupItem className="employees py-4 px-2 px-md-2">
      <CRow className="m-0 align-items-stretch justify-content-between">
        <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
          <small className="text-muted">{ t('requests.create.form.amount') }</small>
          <h6 className="m-0">{ `${ order.amount } ${ order.currency }` }</h6>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
          <small className="text-muted">{ t('requests.create.form.percentage') }</small>
          <span className="d-block">{ `${ order.percentage } %` }</span>
        </CCol>
        <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
          <small className="text-muted">{ t('requests.create.form.days') }</small>
          <span className="d-block">{ t(`requests.days.${ order.days }`) }</span>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
          <small className="text-muted">{ t('requests.create.form.type') }</small>
          <span className="d-block">{ t(`requests.${ order.type }`) }</span>
        </CCol>
      </CRow>
    </CListGroupItem>
  )

  const renderBusinessSuggestions = () => suggestions.map(({
                                                             bankName,
                                                             percentage,
                                                             days,
                                                             type,
                                                             id,
                                                             currency,
                                                             revenue,
                                                             orderId
                                                           }) => (
    <CListGroupItem className="employees py-4 px-2" key={ id }>
      <CRow className="m-0 d-flex justify-content-between align-items-stretch">
        <CCol className="mb-3 mb-md-0" xs={ 6 } md={ 2 }>
          <small className="text-muted">{ t('bankName') }</small>
          <h6 className="m-0">{ bankName }</h6>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } md={ 2 }>
          <small className="text-muted">{ t('requests.create.form.percentage') }</small>
          <span className="d-block">{ `${ percentage } %` }</span>
        </CCol>
        <CCol className="mb-3 mb-md-0" xs={ 6 } md={ 2 }>
          <small className="text-muted">{ t('requests.create.form.days') }</small>
          <span className="d-block">{ t(`requests.days.${ days }`) }</span>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } md={ 2 }>
          <small className="text-muted">{ t('requests.create.form.type') }</small>
          <span className="d-block">{ t(`requests.${ type }`) }</span>
        </CCol>
        <CCol className="mb-3 mb-md-0 text-md-start" xs={ 6 } md={ 2 }>
          <small className="text-muted">{ t('requests.create.form.revenue') }</small>
          <span className="d-block"> { revenue } { currency }</span>
        </CCol>
        { status === 'CREATED' && <CCol className="d-flex align-self-center" xs={ 6 } md={ 2 }>
          { isLoading
            ? <RegularLoader/>
            : <CLink disabled={ isLoading } onClick={ () => handleApplyOffer({ orderId, id }) }
                     className={ classnames('pe-5', {
                       'no-events': isLoading
                     }) } role='button'>
              Принять предложение
            </CLink> }
        </CCol> }
      </CRow>
    </CListGroupItem>
  ))
  const renderCloseOrderModal = () => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('requests.specific.modal.title') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-2">
          { t('requests.specific.modal.content') }
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
        className="align-items-stretch bg-primary rounded-3 m-0 py-4 px-2 text-white justify-content-between">
        <CCol xs={ 6 } xl={ 2 }>
          <small className="text-white">{ t('requests.create.form.amount') }</small>
          <h6 className="m-0">{ `${ amount } ${ currency }` }</h6>
        </CCol>
        <CCol className=" mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
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
        { userType !== 'BANK_ADMIN' && status !== 'CREATED' &&
        <CCol xl={ 2 } xs={ 6 } className="text-end text-md-start">
          <small className="text-white">{ t('requests.create.form.revenue') }</small>
          <h6 className="d-block">{ revenue } { currency }</h6>
        </CCol> }
        { (userType !== 'BANK_ADMIN' && status === 'CREATED') &&
        <CCol xs={ 6 } xl={ 2 } className="d-flex align-self-center justify-content-end">
          { userType !== 'BANK_ADMIN' && status === 'CREATED' && <CLink
            role="button"
            data-id={ id }
            onClick={ onClickHandler }
            className="text-white d-flex align-self-center justify-content-end fw-bold p-0"
          >
            { t('requests.singleRequests.button') }
          </CLink> }
        </CCol> }
      </CRow>
      <h4
        className="mt-5">{ userType === 'BANK_ADMIN' ? t('requests.BANK_ADMIN.title') : status === 'ACTIVE' ? t('requests.BUSINESS_ADMIN.title.activeRequests') : t('requests.BUSINESS_ADMIN.title') }</h4>
      { userType !== 'BANK_ADMIN' && !suggestions.length && !isLoading && <h6 className="text-center mt-5 mb-3">
        { t('requests.BUSINESS_ADMIN.subtitle') }
      </h6> }
      { userType === 'BANK_ADMIN' && !order.id && !isLoading &&
      <h6 className="text-center mt-5 mb-3">
        { t('requests.BANK_ADMIN.subtitle') }
      </h6> }
      <CListGroup className="employees mt-4">
        { isLoading && !order.id && <Loader /> }
        { userType === 'BANK_ADMIN' && order.id && !isLoading && renderBankSuggestion() }
        { userType !== 'BANK_ADMIN' && !isLoading && renderBusinessSuggestions() }
      </CListGroup>
      { renderCloseOrderModal() }
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </>
  )
}

export default SingleRequestView
