import React from 'react'
import {
  CButton,
  CCol,
  CRow,
  CContainer,
  CForm,
  CFormControl,
  CToaster,
  CCard
} from '@coreui/react'
import { PageTitle } from '../../components/titles/pageTitle'
import { useTranslation } from 'react-i18next'
import Loader from '../../components/loaders/intermittent'

const VerificationView = ({
                            verified,
                            openPhoto,
                            data,
                            isLoading,
                            isRequestLoading,
                            onChange,
                            sendCancellation,
                            sendApprove,
                            toaster,
                            toast
                          }) => {
  const { t } = useTranslation()
  const renderSpinner = () => (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"/>
    </div>
  )

  return (
    <div className="min-vh-100 d-flex flex-row align-items-md-center">
      <CContainer className="p-0">
        <h1 className="d-none d-md-block mb-3">
          { t('verification') }
        </h1>
        <CCard className="pb-5 px-3 m-0 p-md-5 h-100">
          <h1 className="text-center d-md-none my-4">
            { t('verification') }
          </h1>
          <PageTitle title={ t('profile.contacts.subtitle') }/>
          <CRow className="m-0">
            { !isLoading && Object.values(data.legalInfo).map((el, index) => (
              <CCol className="p-0" key={ el } xs={ 12 } md={ (index + 1) % 3 === 0 ? 6 : 3 }>
                <small className="text-muted">{ t(`verification.${Object.keys(data.legalInfo)[index]}`) }</small>
                <h6 className="d-block">{ el }</h6>
              </CCol>
            )) }
            { isLoading && <Loader /> }
          </CRow>
          <CCol className="d-flex flex-wrap">
            {
              !isLoading && !data.documents.length &&
              <p className="mt-5">Компания не предоставила документов для верификации</p>
            }
            { !isLoading && !!data.documents.length && data.documents.map(({ id, name, url }) => (
              <div key={ id } className="me-3 mt-3">
                <img
                  data-url={ url }
                  data-name={ name || '' }
                  data-id={ id }
                  onClick={ openPhoto }
                  style={ { objectFit: 'cover', cursor: 'pointer' } }
                  className="position-relative rounded-3"
                  width="100"
                  height="100"
                  src={ url }
                />
                <small className="d-block text-muted">{name}</small>
              </div>
            )) }
          </CCol>
          <CForm>
            <CCol xs={ 12 } md={ 6 }>
              <CRow className="mt-7 mb-4 m-0">
                <CCol xs={ 12 } md={ 6 } className="p-0">
                  <CButton
                    block="true"
                    color="primary"
                    disabled={ isRequestLoading }
                    onClick={ sendApprove }
                    className="btn-lg w-100 text-white"
                  >
                    { isRequestLoading ? renderSpinner() : t('verification.primaryButton') }
                  </CButton>
                </CCol>
                <CCol xs={ 12 } md={ 6 } className="p-0 ps-md-3">
                  <CButton
                    block="true"
                    color="primary"
                    variant="outline"
                    disabled={ isRequestLoading }
                    onClick={ sendCancellation }
                    className="btn-lg w-100 mt-2 mt-md-0"
                  >
                    { isRequestLoading ? renderSpinner() : t('verification.secondaryButton') }
                  </CButton>
                </CCol>
              </CRow>
              <CFormControl
                size="sm"
                id="reason"
                type="text"
                name="reason"
                onChange={ onChange }
                placeholder={ 'Причина отклонения' }
                invalid={ !verified }
              />
              { !verified &&
              <div className="text-danger">
                Введитие причину отклонения
              </div>
              }
            </CCol>
          </CForm>
        </CCard>
        <CToaster ref={ toaster } push={ toast } placement="top-end"/>
      </CContainer>
    </div>
  )
}

export default VerificationView
