import React from 'react'
import {
  CButton,
  CCol,
  CRow,
  CListGroupItem,
  CContainer,
  CForm,
  CFormControl,
  CLink,
  CToaster,
  CFormLabel, CFormFloating
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const NewPasswordView = ({ isLoading, onChange, setNewPasswordHandler, toaster, toast }) => {
  const { t } = useTranslation()
  const renderSpinner = () => (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"/>
    </div>
  )
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <h1>
          {t('resetPassword.title')}
        </h1>
        <span>{ t('resetPassword.subtitle') }</span>
        <CCol>
          <CForm className="flex-column">
            <div className="col-12 col-md-3 mt-3">
              <CFormFloating  className="mt-4">
                <CFormControl
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  placeholder={t('resetPassword.new')}
                  onChange={onChange}
                />
                <CFormLabel htmlFor="password">{t('resetPassword.new')}</CFormLabel>
              </CFormFloating>
              <CFormFloating  className="mt-4">
                <CFormControl
                  autoComplete="off"
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder={t('resetPassword.repeat')}
                  onChange={onChange}
                />
                <CFormLabel htmlFor="repeatPassword">{t('resetPassword.repeat')}</CFormLabel>
              </CFormFloating>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column align-items-start mt-7 mb-4">
              <CButton
                block="true"
                color="primary"
                variant="outline"
                disabled={isLoading}
                onClick={setNewPasswordHandler}
                className="btn-lg col-12"
              >
                {isLoading ? renderSpinner() : t('setNewPassword')}
              </CButton>
            </div>
          </CForm>
        </CCol>
        <CToaster ref={toaster} push={toast} placement="top-end" />
      </CContainer>
    </div>
  )
}

export default NewPasswordView
