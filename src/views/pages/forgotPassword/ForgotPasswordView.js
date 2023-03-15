import React from 'react'
import { CButton, CCol, CContainer, CForm, CFormControl, CToaster } from '@coreui/react'
import { useTranslation } from 'react-i18next'

const ForgotPasswordView = ({ isLoading, onChange, forgotHandler, toaster, toast }) => {
  const { t } = useTranslation()
  const renderSpinner = () => (
    <div className="d-flex justify-content-center spinner-border text-primary mx-auto">
      <span className="sr-only" />
    </div>
  )

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <h1>
          {t('goToForgot')}
        </h1>
        <span>{ t('goToForgot.subtitle') }</span>
        <CCol>
          <CForm onSubmit={ forgotHandler } className="flex-column">
            <div className="col-12 col-md-3 mt-3">
              <CFormControl
                size="lg"
                id="email"
                type="text"
                name="email"
                onChange={onChange}
                placeholder={t('email')}
              />
            </div>
            <div className="col-12 col-md-3 d-flex flex-column align-items-start mt-7 mb-4">
              <CButton
                color="primary"
                variant="outline"
                disabled={isLoading}
                onClick={forgotHandler}
                className="btn-lg col-12"
              >
                {isLoading ? renderSpinner() : t('sendNewPassword')}
              </CButton>
            </div>
          </CForm>
        </CCol>
        <CToaster ref={toaster} push={toast} placement="top-end" />
      </CContainer>
    </div>
  )
}

export default ForgotPasswordView
