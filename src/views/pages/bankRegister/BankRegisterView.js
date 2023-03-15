import React from 'react'
import {
  CContainer,
  CFormControl,
  CRow,
  CCol,
  CFormFloating,
  CFormLabel,
  CToaster, CButton
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

const BankRegisterView = ({
                            onChange,
                            isLoading,
                            toaster,
                            toast,
                            sendRequest,
                            formData,
                            isRegistrationCompleted
                          }) => {
  const { t } = useTranslation()

  const renderLoading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center col-lg-8 mx-auto">
      { !isRegistrationCompleted
        ? (
          <div className="d-flex justify-content-center intermittent spinner-border text-primary"
               style={ { width: '5em', height: '5em' } }
               role="status">
            <span className="sr-only"/>
          </div>)
        : (<div className="completedRegistration" style={ { width: '5em', height: '5em' } }/>) }
      <h1
        className="mt-5 text-center">{ t(`register.newAccount.loading.${ isRegistrationCompleted ? 'success' : 'pending' }`) }</h1>
    </div>
  )
  const renderContent = () => (
    <CCol className="d-flex flex-column justify-content-between">
      <div>
        <h1 className="p-0">{ t('bankRegister.title') }</h1>
        <CRow className="m-0 mt-5">
          <div className="px-0 col-12 col-md-3">
            <CFormFloating>
              <CFormControl
                value={ formData.company }
                type="text"
                name="company"
                id="company"
                placeholder={ t('bankName') }
                onChange={ onChange }
              />
              <CFormLabel htmlFor="company">{ t('bankName') }</CFormLabel>
            </CFormFloating>
          </div>
          <div className="px-0 mx-md-4 col-12 col-md-3">
            <CFormFloating>
              <CFormControl
                value={ formData.email }
                // valid={}
                // invalid={}
                type="email"
                name="email"
                id="email"
                placeholder={ t('email') }
                onChange={ onChange }
              />
              <CFormLabel htmlFor="email">{ t('email') }</CFormLabel>
            </CFormFloating>
          </div>
        </CRow>

      </div>
      <div className="col-12 col-md-3 my-md-0 my-5 d-flex flex-column align-items-start">
        <CButton
          key={ uuidv4() }
          className="text-white btn-lg w-100"
          color="primary"
          block="true"
          // disabled={}
          onClick={ sendRequest }
        >
          {t('bankRegister.button')}
        </CButton>
      </div>
    </CCol>
  )

  return (
    <CContainer className="min-vh-100 d-flex pb-4 pt-5">
      { isLoading && renderLoading() }
      { !isLoading && renderContent() }
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </CContainer>
  )
}

export default BankRegisterView
