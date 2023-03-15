import React from 'react'
import { useTranslation } from 'react-i18next'
import { Employees } from 'src/components/employees'
import { UserContacts } from 'src/components/userContacts'
import { Entity } from 'src/components/entity'
import { Security } from 'src/components/security'
import { Documents } from 'src/components/documents'
import { CButton, CCol, CRow, CToaster } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { logout } from 'src/store'
import { PageTitle } from '../components/titles/pageTitle'

const ProfileView = ({
                      userContactDataProps,
                      documentsPropsData,
                      entityDataProps,
                      employeesPropsData,
                      securityDataProps,
                      toaster,
                      toast,
                      user,
                      verificationButtonHandler,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const logOutHandler = () => dispatch(logout())
  return (
    <>
      <PageTitle title={ t(user.status === 'VERIFIED' ? 'profile' : 'verification') } withSecondaryButton secondaryButtonLabel={ t('logOut') }
        onSecondaryButtonClick={logOutHandler} />
      { user.status !== 'VERIFIED' && user.type !== 'BANK_ADMIN' &&
      <CRow className="align-items-center text-white rounded-3 bg-primary px-3 m-0 py-4">
        <CCol md={ 9 } className="p-0">
          <h6 className="m-0">{ t('verificationProfileText') }</h6></CCol>
          <CButton
            size="sm"
            className="rounded-3 col-12 col-md-3 btn-sm text-primary px-0 py-2 bg-white mt-3 mt-md-0"
            color="primary"
            block="true"
            onClick={verificationButtonHandler}
          >
            { t('verification.button') }
          </CButton>
      </CRow>
      }
      <UserContacts {...userContactDataProps} />
      <Security {...securityDataProps} />
      <Entity {...entityDataProps} />
      {employeesPropsData.shouldDisplayComponent && <Employees {...employeesPropsData} />}
      {documentsPropsData.shouldDisplayComponent && <Documents {...documentsPropsData} />}
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default ProfileView
