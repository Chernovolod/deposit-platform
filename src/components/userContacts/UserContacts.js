import React, { useState } from 'react'
import {
  CCard,
  CCol,
  CRow,
  CButton,
  CCardBody,
  CModal,
  CFormFloating,
  CFormLabel,
  CFormControl,
  CModalContent,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle, CFormText
} from '@coreui/react'
import { ProfileTitle } from 'src/views/components/titles/profileTitle'
import Loader from 'src/views/components/loaders/intermittent'
import RegularLoader from 'src/views/components/loaders/regular'
import { useTranslation } from 'react-i18next'

const UserContacts = ({ data, isLoading, userInfo, handleContactDataUpdate, isContactDataUpdateRunning, onChange }) => {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation()
  const onChangeHandler = (event) => onChange('contactForm', event)
  const isBankUser = userInfo.type === 'BANK_ADMIN'
  const renderContent = () => (
    <CRow>
      <CCol xs={12} md={3} className="mb-3 mb-md-0">
        <small className="text-muted">{t('email')}</small>
        <h6 className="m-0">{userInfo?.email}</h6>
      </CCol>
      {!isBankUser && <CCol xs={12} md={3} className="mb-3 mb-md-0">
        <small className="text-muted">{t('phoneNumber')}</small>
        <span className="d-block">{userInfo.phone ? `+${userInfo.phone}` : ''}</span>
      </CCol>}
      <CCol xs={12} md={3}>
        <small className="text-muted">{t('yourName')}</small>
        <h6 className="m-0">{data.firstName}</h6>
      </CCol>
    </CRow>
  )
  const renderEditModal = () => (
    <CModal alignment="center" visible={visible}>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle component="h2">{t('edit.pending')}</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-4">
          <CFormFloating>
            <CFormControl
              value={data.email || ''}
              disabled={isContactDataUpdateRunning}
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              placeholder={t('email')}
              onChange={onChangeHandler}
            />
            <CFormLabel htmlFor="email">{t('email')}</CFormLabel>
          </CFormFloating>
          <CCol className="mt-4 position-relative" xl={6}>
            <CFormText component="span" id="phone">{t('phoneNumber')}</CFormText>
            <CFormText
              style={{ fontSize: '1rem', bottom: '0.2rem' }}
              className="position-absolute start-0 pb-1"
              component="span"
              id="phone"
            >
              + {t('countryPhoneCode')}
            </CFormText>
            <CFormControl
              value={data?.phone || ''}
              className="ps-5"
              disabled={isContactDataUpdateRunning}
              autoComplete="off"
              type="number"
              name="phone"
              id="phone"
              placeholder="251112233"
              onChange={onChangeHandler}
            />
          </CCol>
          <CFormFloating className="mt-4">
            <CFormControl
              value={data.lastName || ''}
              disabled={isContactDataUpdateRunning}
              autoComplete="off"
              type="text"
              name="lastName"
              id="lastName"
              placeholder={t('yourLastName')}
              onChange={onChangeHandler}
            />
            <CFormLabel htmlFor="lastName">{t('yourLastName')}</CFormLabel>
          </CFormFloating>
          <CFormFloating className="mt-4">
            <CFormControl
              value={data.firstName || ''}
              disabled={isContactDataUpdateRunning}
              autoComplete="off"
              type="text"
              name="firstName"
              id="name"
              placeholder={t('yourName')}
              onChange={onChangeHandler}
            />
            <CFormLabel>{t('yourName')}</CFormLabel>
          </CFormFloating>
          <CFormFloating className="mt-4">
            <CFormControl
              value={data.middleName || ''}
              disabled={isContactDataUpdateRunning}
              autoComplete="off"
              type="text"
              name="middleName"
              id="name"
              placeholder={t('yourMiddleName')}
              onChange={onChangeHandler}
            />
            <CFormLabel htmlFor="email">{t('yourMiddleName')}</CFormLabel>
          </CFormFloating>
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton
            disabled={isContactDataUpdateRunning}
            className="text-white py-2"
            size="sm"
            color="primary"
            onClick={handleContactDataUpdate}>
            {isContactDataUpdateRunning ? <RegularLoader classes="text-white" /> : t('save')}
          </CButton>
          <CButton className="mx-3 py-2" color="primary" size="sm" variant="outline" onClick={() => setVisible(false)}>
            {t('cancel')}
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  return (
    <>
      <ProfileTitle title={t('profile.contacts.subtitle')} editable onEdit={() => setVisible(!visible)} />
      <CCard>
        <CCardBody className="py-4">
          {isLoading && <Loader />}
          {!isLoading && renderContent()}
        </CCardBody>
      </CCard>
      {renderEditModal()}
    </>
  )
}

export default UserContacts
