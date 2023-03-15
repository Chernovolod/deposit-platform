import React, { useState } from 'react'
import {
  CCard,
  CCol,
  CRow,
  CButton,
  CCardBody,
  CFormControl,
  CFormFloating,
  CFormLabel,
  CModal,
  CModalContent,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CForm, CFormText
} from '@coreui/react'
import { ProfileTitle } from 'src/views/components/titles/profileTitle'
import Loader from 'src/views/components/loaders/intermittent'
import RegularLoader from 'src/views/components/loaders/regular'
import { useTranslation } from 'react-i18next'

const Security = ({ cleanPasswordData, isSecurityUpdateLoading, isLoading, data, userInfo, handlePasswordUpdate, onChange, visible, setVisible }) => {
  const { t } = useTranslation()
  const onChangeHandler = (event) => onChange('updatePassword', event)
  const renderContent = () => (
    <>
      { userInfo.status === 'UNVERIFIED' && userInfo.type !== 'BANK_ADMIN' &&
      <p>{ t('profile.security.unverified.info') }</p>
      }
      <CRow>
        <CCol xs={ 12 } md={ 3 }>
          <small className="text-muted">{ t('login') }</small>
          <h6 className="m-0">{ userInfo?.email }</h6>
        </CCol>
        <CCol xs={ 12 } md={ 3 } className="mt-3 mt-md-0">
          <small className="text-muted">{ t('password') }</small>
          <h6 className="m-0">****************</h6>
        </CCol>
      </CRow>
    </>
  )
  const renderEditModal = () => (
    <CModal alignment="center" visible={ visible }>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={ () => {
          cleanPasswordData()
          setVisible(false)
        } }>
          <CModalTitle component="h2">{ t('edit.pending') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
          <CForm>
            <CFormFloating>
              <CFormControl
                autoComplete="off"
                type="password"
                name="oldPassword"
                id="oldPassword"
                placeholder={ t('oldPassword') }
                onChange={ onChangeHandler }
                onPaste={ onChangeHandler }
              />
              <CFormLabel htmlFor="oldPassword">{ t('oldPassword') }</CFormLabel>
            </CFormFloating>
            <CFormFloating className="mt-4">
              <CFormControl
                autoComplete="off"
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder={ t('newPassword') }
                onChange={ onChangeHandler }
                onPaste={ onChangeHandler }
              />
              <CFormLabel htmlFor="newPassword">{ t('newPassword') }</CFormLabel>
            </CFormFloating>
            { data.newPassword && data.repeatPassword && data.newPassword !== data.repeatPassword &&
            <CFormText className="text-danger" component="span">{t('profile.security.modal.errorLabel')}</CFormText> }
            <CCol className="mt-2" xl={ 12 }>
              <CFormFloating>
                <CFormControl
                  autoComplete="off"
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder={ t('repeatPassword') }
                  onChange={ onChangeHandler }
                  onPaste={ onChangeHandler }
                />
                <CFormLabel htmlFor="repeatPassword">{ t('repeatPassword') }</CFormLabel>
              </CFormFloating>
              { data.newPassword && data.repeatPassword && data.newPassword !== data.repeatPassword &&
              <CFormText className="text-danger" component="span">{t('profile.security.modal.errorLabel')}</CFormText> }
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton disabled={ !data.oldPassword || !data.newPassword || !data.repeatPassword || data.newPassword !== data.repeatPassword || isSecurityUpdateLoading } onClick={ handlePasswordUpdate }
                   className="text-white py-2" size="sm" color="primary">
            { isSecurityUpdateLoading ? <RegularLoader classes="text-white"/> : t('save') }
          </CButton>
          <CButton className="mx-3 py-2" color="primary" size="sm" variant="outline"
                   onClick={ () => {
                     cleanPasswordData()
                     setVisible(false)
                   } }>
            { t('cancel') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  return (
    <>
      <ProfileTitle title={ t('profile.security.subtitle') } editable onEdit={ () => setVisible(!visible) }/>
      <CCard>
        <CCardBody className="py-4">
          { isLoading && <Loader/> }
          { !isLoading && renderContent() }
        </CCardBody>
      </CCard>
      { renderEditModal() }
    </>
  )
}

export default Security
