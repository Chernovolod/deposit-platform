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
import RegularLoader from '../../components/loaders/regular'

const LoginView = ({ logInHandler, onChange, isLoading, toaster, toast, history }) => {
  const { t } = useTranslation()

  return (
    <CContainer className="min-vh-100 py-6 d-flex flex-column justify-content-between">
      <div>
        <h1>{ t('logInToAccount') }</h1>
        <p className="mb-5">{ t('login.subtitle') }</p>
        <CCol className="d-flex flex-column justify-content-between">
          <CForm className="row">
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
            <div className="mt-3 mt-md-0 col-12 col-md-3">
              <CFormControl
                size="lg"
                id="password"
                type="password"
                name="password"
                onChange={ onChange }
                placeholder={ t('password') }
              />
            </div>
            <CLink className="mt-3 mb-3 mb-md-0" href="/forgot">{ t('goToForgot') }</CLink>
          </CForm>
        </CCol>
      </div>
      <div className="d-flex flex-wrap mb-4 mb-md-0 align-items-end col-12 col-md-6 mt-auto">
        <CCol xs={ 12 } xl={ 3 }>
          <CButton
            block="true"
            color="primary"
            disabled={ isLoading }
            onClick={ logInHandler }
            className="btn-lg w-100 text-white"
          >
            { isLoading ? <RegularLoader classes="text-white" /> : t('logIn') }
          </CButton>
        </CCol>
        <CCol xs={ 12 } xl={ 6 }>
          <CButton
            block="true"
            color="primary"
            variant="outline"
            onClick={ () => history.push('/register') }
            className="btn-lg w-100 ms-md-3 mt-3 mt-md-0"
          >
            { t('goToRegister') }
          </CButton>
        </CCol>
      </div>
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </CContainer>
  )
}

export default LoginView
