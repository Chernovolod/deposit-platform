import React from 'react'
import {
  CButton,
  CContainer,
  CLink,
  CFormControl,
  CForm,
  CCol,
  CToaster
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const BankLoginView = ({ logInHandler, onChange, isLoading, toaster, toast }) => {
  const { t } = useTranslation()
  const renderSpinner = () => (
    <div className="d-flex justify-content-center spinner-border text-primary mx-auto" role="status">
      <span className="sr-only" />
    </div>
  )
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <h1>
          { t('logInToBankAccount') }
        </h1>
        <span>{ t('bankLogin.subtitle') }</span>
        <CCol className="mt-5">
          <div className="col-12 col-md-3">
            <CFormControl
              size="lg"
              id="email"
              type="text"
              name="email"
              onChange={ onChange }
              placeholder={ t('email') }
            />
          </div>
          <div className="col-12 col-md-3 mt-3 mb-5">
            <CFormControl
              size="lg"
              id="password"
              type="password"
              name="password"
              onChange={ onChange }
              placeholder={ t('password') }
            />
          </div>
        </CCol>
        <div className="d-flex col-12 col-md-3 mt-3 mb-3">
          <CButton
            block="true"
            color="primary"
            variant="outline"
            disabled={ isLoading }
            onClick={ logInHandler }
            className="btn-lg w-100"
          >
            { isLoading ? renderSpinner() : t('logIn') }
          </CButton>
        </div>
        <div className="mt-3 mt-md-0 d-flex flex-column flex-md-row">
          <CLink href="/bank/register">{ t('goToRegister') }</CLink>
          <CLink className="ms-md-3 mt-2 mt-md-0" href="/forgot">{t('goToForgot')}</CLink>
        </div>
        <CToaster ref={ toaster } push={ toast } placement="top-end"/>
      </CContainer>
    </div>
  )
}

export default BankLoginView
