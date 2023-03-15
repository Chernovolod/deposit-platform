import React, { useState, useEffect, useRef } from 'react'
import {
  CToaster,
  CCard,
  CToast,
  CToastHeader,
  CToastBody,
  CCol,
  CRow,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CButton,
  CModal,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CLink,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CModalFooter, CForm, CFormText, CFormSelect
} from '@coreui/react'
import RegularLoader from 'src/views/components/loaders/regular'
import classnames from 'classnames'
import Loader from 'src/views/components/loaders/intermittent'
import { isEmpty } from 'src/utils/objectUtils'
import { useTranslation } from 'react-i18next';

const ActionRequestsTab = ({
                             isLoading,
                             suggestRequestHandler,
                             isNewRequestTab,
                             isBankUserType,
                             setSpecificModeData,
                             specificModeData,
                             activeRequests,
                             setPageMode
                           }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({})
  useEffect(() => {
    if (isBankUserType && isNewRequestTab) {
      setFormData(
        {...formData,
        days: specificModeData.days,
        type: specificModeData.type,
        percentage: specificModeData.percentage
      })
    }
  }, [ specificModeData ])

  const [visible, setVisible] = useState(false)
  const onClickHandler = ({ target: { dataset: { id } } }) => {
    if (isBankUserType && isNewRequestTab) {
      setSpecificModeData(id, true)
      setVisible(true)
    } else {
      setSpecificModeData(id)
    }
  }
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const toaster = useRef()
  const [toast, addToast] = useState(0)

  const showErrorToast = (message = '', isError = true ) => (
    <CToast title={isError ? t('defaultErrorTitle') : t('congratulations')} autohide={true}>
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
  const onSubmit = () => {
    suggestRequestHandler({...formData,
      amount: specificModeData.amount,
      currency: specificModeData.currency,
      activeUntil: specificModeData.activeUntil,
      orderId: specificModeData.id,
    })
    addToast(() => showErrorToast(t('landing.bank.requests.success'), false))
    setVisible(false)
  }

  const setButtonContent = (status) => {
    if (isBankUserType && isNewRequestTab) {
      return t('requests.modal.primaryButton')
    }

    if (!isBankUserType) {

    }

    return t('deposits.actionDeposit.button')
  }
  const renderSuggestRequestModal = ({ amount, currency, percentage, type, days }) => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4">
        <CModalHeader className="ps-4" onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('requests.bank.modal.title') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="p-0">
          <div className="p-4" style={ { backgroundColor: '#FBFBFB', border: '1px solid #F2F2F2' } }>
            <CRow className="mb-3">
              <CCol xl={ 4 }>
                <small className="text-muted">{ t('requests.create.form.amount') }</small>
                <h6 className="d-block">{ `${ amount } ${ currency }` }</h6>
              </CCol>
              <CCol xl={ 4 }>
                <small className="text-muted">{ t('requests.create.form.percentage') }</small>
                <span className="d-block">{ percentage } %</span>
              </CCol>
              <CCol xl={ 4 }>
                <small className="text-muted">{ t('requests.create.form.days') }</small>
                <span className="d-block">{ t(`requests.days.${ days }`) }</span>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={ 6 }>
                <small className="text-muted">{ t('requests.create.form.type') }</small>
                <span className="d-block">{ t(`requests.${ type }`) }</span>
              </CCol>
            </CRow>
          </div>
          <CForm className="row mx-0 mt-4 px-4">
            <CCol xl={ 2 } className="amount-container px-0 me-3">
              <CFormText component="span" id="percentage">{ t('requests.create.form.percentage') }</CFormText>
              <CFormControl
                aria-describedby="percentage"
                autoComplete="off"
                type="number"
                name="percentage"
                value={formData.percentage}
                id="percentage"
                // placeholder="%"
                onChange={ onChange }
              />
            </CCol>
            <CCol xl={ 4 }>
              <CFormText component="span" id="days">{ t('requests.create.form.days') }</CFormText>
              <CFormSelect name="days"
                           onChange={ onChange }
                           value={formData.days}
                           aria-describedby="days" aria-label={ t('requests.create.form.days') }>
                <option value="90">{t('requests.days.90')}</option>
                <option value="180">{t('requests.days.180')}</option>
                <option value="365">{t('requests.days.365')}</option>
                <option value="1095">{t('requests.days.1095')}</option>
              </CFormSelect>
            </CCol>
            <CCol xl={ 5 }>
              <CFormText component="span" id="type">{ t('requests.create.form.type') }</CFormText>
              <CFormSelect name="type" value={formData.type} onChange={ onChange } aria-describedby="type"
                           aria-label={ t('requests.create.form.type') }>
                <option value="REVOCABLE">{t('Revocable')}</option>
                <option value="IRREVOCABLE">{t('Irrevocable')}</option>
              </CFormSelect>
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start px-4 mt-5">
          <CButton onClick={ onSubmit } disabled={ isLoading || !formData.percentage } className="text-white" size="sm" color="primary">
            { isLoading ? <RegularLoader classes="text-white"/> : t('requests.modal.primaryButton') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )

  const renderActiveRequestsList = () => activeRequests.map(({
                                                               id,
                                                               percentage,
                                                               amount,
                                                               days,
                                                               currency,
                                                               type,
                                                               offers,
                                                               referralId,
                                                               alreadyOffered,
                                                               revenue
                                                             }, index) => {
    return (
      <CListGroupItem className={classnames("employees py-4 px-2 px-md-3", {"bg-primary text-white": isBankUserType && referralId !== null})} key={ id }>
        <CRow className="m-0 align-items-stretch">
          <CCol className=" mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ t('requests.create.form.amount') }</small>
            <h6 className="m-0">{ `${ amount } ${ currency }` }</h6>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ t('requests.create.form.percentage') }</small>
            <span className="d-block">{ `${ percentage } %` }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ t('requests.create.form.days') }</small>
            <span className="d-block">{ t(`requests.days.${ days }`) }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ t('requests.create.form.type') }</small>
            <span className="d-block">{ t(`requests.${ type }`) }</span>
          </CCol>
          { isNewRequestTab ? 
            <CCol xs={ 6 } xl={ 2 }>
              <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ isBankUserType ? t('requests.appliedRequests') : t('requests.offers') }</small>
              <span className="d-block">{ offers }</span>
            </CCol>
            :
            <CCol xs={ 6 } xl={ 2 }>
              <small className={isBankUserType && referralId !== null ? "text-white" : "text-muted"}>{ isBankUserType ? t('requests.revenue') : t('requests.offers') }</small>
              <span className="d-block">{ isBankUserType ? `${revenue} ${currency}` : offers }</span>
            </CCol>
          }
          <CCol xs={ 6 } xl={ 2 } className="d-flex align-self-end align-self-md-center justify-content-end justify-content-md-start text-end text-md-start">
            <CLink
              role='button'
              data-id={ id }
              onClick={ onClickHandler }
              className={classnames({"text-white": isBankUserType && referralId !== null})}
            >
              { setButtonContent() } 
            </CLink>
          </CCol>
        </CRow>
      </CListGroupItem>
    )
  })

  return (
    <>
      <CListGroup className="employees mt-4">{ renderActiveRequestsList() }</CListGroup>
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
      { isBankUserType && renderSuggestRequestModal(specificModeData) }
    </>
  )
}

export default ActionRequestsTab
