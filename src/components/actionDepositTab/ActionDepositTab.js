import React, { useState } from 'react'
import {
  CToaster,
  CCard,
  CCol,
  CRow,
  CLink,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CButton,
  CModal,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CModalFooter, CForm, CFormText, CFormSelect
} from '@coreui/react'
import RegularLoader from 'src/views/components/loaders/regular'
import Loader from 'src/views/components/loaders/intermittent'
import { useTranslation } from 'react-i18next';

const ActionDepositTab = ({
                             isLoading,
                             suggestRequestHandler,
                             isNewRequestTab,
                             isBankUserType,
                             setSpecificModeData,
                             activeRequests,
                             setPageMode
                           }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    orderId: '1',
    percentage: 0,
    type: 'IRREVOCABLE',
    days: '90'
  })
  const [visible, setVisible] = useState(false)
  const onClickHandler = ({ target: { dataset: { id } } }) => {
    if (isNewRequestTab) {
      setVisible(true)
    } else {
      setPageMode('specific')
      setSpecificModeData(id)
    }
  }
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onSubmit = () => {
    suggestRequestHandler(formData)
  }
  const setButtonContent = () => {
    if (isNewRequestTab) {
      return t('deposits.actionDepositTab.button')
    }

    return t('deposits.actionDeposit.button')
  }
  const renderSuggestRequestModal = () => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4">
        <CModalHeader className="ps-4" onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('requests.bank.modal.title') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="p-0">
          <div className="p-4" style={{backgroundColor: '#FBFBFB', border: '1px solid #F2F2F2'}}>
            <CRow className="mb-3">
              <CCol xl={ 4 }>
                <small className="text-muted">{t('requests.create.form.amount')}</small>
                <h6 className="d-block">100500 BYN</h6>
              </CCol>
              <CCol md= { 4 }>
                <small className="text-muted">{t('requests.create.form.percentage')}</small>
                <span className="d-block">99 %</span>
              </CCol>
              <CCol xl={ 4 }>
                <small className="text-muted">{t('requests.create.form.days')}</small>
                <span className="d-block">3 месяца</span>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={ 6 }>
                <small className="text-muted">{t('requests.create.form.type')}</small>
                <span className="d-block">Замокано</span>
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
                id="percentage"
                // placeholder="%"
                onChange={ onChange }
              />
            </CCol>
            <CCol xl={ 4 }>
              <CFormText component="span" id="days">{ t('requests.create.form.days') }</CFormText>
              <CFormSelect name="days"
                           onChange={ onChange }
                           aria-describedby="days" aria-label={ t('requests.create.form.days') }>
                <option value="90">{t('requests.days.90')}</option>
                <option value="180">{t('requests.days.180')}</option>
                <option value="365">{t('requests.days.365')}</option>
                <option value="1095">{t('requests.days.1095')}</option>
              </CFormSelect>
            </CCol>
            <CCol xl={ 5 }>
              <CFormText component="span" id="type">{ t('requests.create.form.type') }</CFormText>
              <CFormSelect name="type" onChange={onChange} aria-describedby="type" aria-label={ t('requests.create.form.type') }>
                <option value="REVOCABLE">{t('Revocable')}</option>
                <option value="IRREVOCABLE">{t('Irrevocable')}</option>
              </CFormSelect>
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start px-4 mt-5">
          <CButton onClick={ onSubmit } disabled={ isLoading } className="text-white" size="sm" color="primary">
            { isLoading ? <RegularLoader classes="text-white"/> : t('requests.modal.primaryButton') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  const renderActiveRequestsList = () => activeRequests.map(({
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
        <CRow className="justify-content-between align-items-stretch m-0 mb-3 mb-md-0">
          <CCol className=" mb-3 mb-md-0" xs={ 6 } xl={ 1 }>
            <small className="text-muted">{ t('requests.create.form.percentage') }</small>
            <span className="d-block">{ `${ percentage } %` }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.days') }</small>
            <span className="d-block">{ t(`requests.days.${ days }`) }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.type') }</small>
            <span className="d-block">{ t(`requests.${ type }`) }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted text-nowrap">{ t('requests.create.form.minimalAmount') }</small>
            <span className="d-block">{ `${ minAmount } ${ currency }` }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted text-nowrap">{ t('requests.create.form.maximumAmount') }</small>
            <span className="d-block">{ `${ maxAmount } ${ currency }` }</span>
          </CCol>
          <CCol className=" mb-3 mb-md-0 text-end align-self-md-center align-self-end text-md-start" xs={ 6 } xl={ 2 }>
            <CLink
              role="button"
              data-id={ id }
              onClick={ onClickHandler }
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
      { isBankUserType && renderSuggestRequestModal() }
    </>
  )
}

export default ActionDepositTab
