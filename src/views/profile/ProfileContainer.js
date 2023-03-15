import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import ProfileView from './ProfileView'

import {
  getEmployeesList,
  updateCandidate,
  getDocumentsList,
  getUserInfo,
  updateContactData,
  updatePassword,
  uploadDocument,
  deleteDocument,
  getBusinessCompanyData,
  verifyUser
} from 'src/services'
import { Helmet } from 'react-helmet'

const ProfileContainer = ({ user, isBankUserType, isBusinessUserType, ...rest }) => {
  const { t } = useTranslation()
  const [loaders, setLoaders] = useState({
    isEmployeesListLoading: false,
    isContactDataLoading: false,
    isContactDataUpdateRunning: false,
    isSecurityDataLoading: false,
    isSecurityUpdateLoading: false,
    isEntityDataLoading: false,
    isDocumentsDataLoading: false,
    isCandidateApprovalRunning: false,
    isVerificationLoader: true,
    runningId: ''
  })
  const [employeesList, setEmployeesList] = useState([])
  const [documentsList, setDocumentsList] = useState([])
  const [visible, setVisible] = useState(false)
  const [userInfo, setUserInfo] = useState({
    company: {
      name: '',
      legalInfo: {
        unp: '',
        registrationDate: '',
        issuer: '',
        type: '',
        name: '',
        address: ''
      }
    },
    fields: {
      firstName: '',
      lastName: '',
      middleName: ''
    }
  })
  const [formData, setFormData] = useState({
    contactForm: {
      email: userInfo.email || '',
      phone: userInfo.phone || '',
      fields: {
        firstName: userInfo?.fields?.firstName || '',
        lastName: userInfo?.fields?.lastName || '',
        middleName: userInfo?.fields?.middleName || '',
      },
    },
    updatePassword: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: ''
    }
  })
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  useEffect(async () => {
    loadEmployeesList()
  }, [rest.userType])
  useEffect(async () => {
    if (isBusinessUserType) {
      try {
        setLoaders({
          ...loaders,
          isDocumentsDataLoading: true
        })
        const documentsList = await getDocumentsList()
        setDocumentsList([...documentsList])
      } catch (error) {
        addToast(() => showErrorToast())
      } finally {
        setLoaders({
          ...loaders,
          isDocumentsDataLoading: false
        })
      }
    }
  }, [rest.userType])
  useEffect(async () => {
    try {
      setLoaders({
        ...loaders,
        isContactDataLoading: true,
        isSecurityDataLoading: true
      })
      const personalData = await getUserInfo()
      setUserInfo({
        ...userInfo,
        ...personalData
      })
      setFormData({
        ...formData,
        contactForm: {
          ...formData.contactForm,
          email: personalData.email || '',
          phone: personalData?.phone?.substring(3) || '',
          firstName: personalData?.fields?.firstName || '',
          lastName: personalData?.fields?.lastName || '',
          middleName: personalData?.fields?.middleName || ''
        }
      })
    } catch (error) {
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isContactDataLoading: false,
        isSecurityDataLoading: false
      })
    }
  }, [])
  const loadEmployeesList = async () => {
    if (!isBankUserType) {
      try {
        setLoaders({
          ...loaders,
          isEmployeesListLoading: true
        })
        const employeesList = await getEmployeesList()
        setEmployeesList([...employeesList])
      } catch (error) {
        console.log(error)
        addToast(() => showErrorToast())
      } finally {
        setLoaders({
          ...loaders,
          isEmployeesListLoading: false
        })
      }
    }
  }
  const cleanPasswordData = () => {
    setFormData({
      ...formData,
      updatePassword: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
      }
    })
  }
  const verificationButtonHandler = async() => {
    try {
      setLoaders({
        ...loaders,
        isVerificationLoader: true
      })
      const data = await verifyUser({})
      if (data.wasCreated) {
        addToast(() => showErrorToast(t('verificationRequestSuccessfullySent'), false))
      }
    } catch (e) {
      setLoaders({
        ...loaders,
        isVerificationLoader: false
      })
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isVerificationLoader: false
      })
    }
  }

  const getCompanyDataHandler = async (unpInfo) => {
    try {
      setLoaders({
        ...loaders,
        isEntityDataLoading: true
      })
      const response = await getBusinessCompanyData(unpInfo)
      if (response.message) {
        addToast(() => showErrorToast(response.message))
      }
      if (!response.message) {
        setUserInfo({ ...userInfo, company: { ...userInfo.company, legalInfo: response } })
      }
    } catch {
      addToast(() => showErrorToast())
    }
    finally {
      setLoaders({
        ...loaders,
        isEntityDataLoading: false
      })
    }
  }

  const handleContactDataUpdate = async () => {
    try {
      setLoaders({
        ...loaders,
        isContactDataUpdateRunning: true
      })
      const contactFormData = { ...formData.contactForm }
      delete contactFormData.fields
      if (!contactFormData.email && userInfo.email) {
        contactFormData.email = userInfo.email
      }
      if (!contactFormData.phone && userInfo.phone) {
        contactFormData.phone = userInfo.phone
      }
      contactFormData.phone = t('countryPhoneCode') + contactFormData.phone
      const data = await updateContactData(contactFormData)
      if (!data.message) {
        setUserInfo({ ...userInfo, ...data })
        addToast(() => showErrorToast(t('dataSuccessfullyUpdated'), false))
      }
      if (data.message) addToast(() => showErrorToast(data.message))

    } catch (error) {
      console.log(error)
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isContactDataUpdateRunning: false
      })
    }
  }
  const handleCandidateApproval = async ({ target: { dataset: { email, approved, id } } }) => {
    try {
      setLoaders({
        ...loaders,
        isCandidateApprovalRunning: true,
        runningId: id
      })
      const data = { email, approved: approved === 'true' }
      const { message } = await updateCandidate(data)
      if (message) {
        addToast(() => showErrorToast(message))
      } else {
        try {
          setLoaders({
            ...loaders,
            isEmployeesListLoading: true
          })
          const employeesList = await getEmployeesList()
          setEmployeesList([...employeesList])
        } catch (error) {
          console.log(error)
          addToast(() => showErrorToast())
        } finally {
          setLoaders({
            ...loaders,
            isEmployeesListLoading: false
          })
        }
      }
    } catch (error) {
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isCandidateApprovalRunning: false
      })
    }
  }
  const handlePasswordUpdate = async () => {
    try {
      setLoaders({
        ...loaders,
        isSecurityUpdateLoading: true
      })
      const updatePasswordData = { ...formData.updatePassword }
      delete updatePasswordData.repeatPassword
      const { message } = await updatePassword(updatePasswordData)
      if (message) {
        addToast(() => showErrorToast(message))
      }
      if (!message) {
        setVisible(false)
        addToast(() => showErrorToast(t('passwordSuccessfullyUpdated'), false))
      }
    } catch (error) {
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isSecurityUpdateLoading: false
      })
    }
  }
  const handleDeleteDocument = async ({ target: { dataset: { id } } }) => {
    try {
      setLoaders({
        ...loaders,
        isDocumentsDataLoading: true
      })
      await deleteDocument(id)
      const updatedDocuments = documentsList.filter(el => el.id !== id)
      setDocumentsList(updatedDocuments)
    } catch (e) {
      console.log(e)
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isDocumentsDataLoading: false
      })
    }
  }
  const handleUploadDocument = async (fileData) => {
    try {
      setLoaders({
        ...loaders,
        isDocumentsDataLoading: true
      })

      const response = await uploadDocument(fileData)
      if (response.message) {
        addToast(() => showErrorToast(response.message))
      }
      if (!response.message) {
        const [uploadedImage] = response
        const updatedDocuments = [...documentsList, uploadedImage]
        if (uploadedImage) {
          setDocumentsList(updatedDocuments)
        }
      }
    } catch (error) {
      addToast(() => showErrorToast())
    } finally {
      setLoaders({
        ...loaders,
        isDocumentsDataLoading: false
      })
    }
  }
  const onChange = (form, { target: { name, value } }) => {
    setFormData({
      ...formData,
      [form]: {
        ...formData[form],
        [name]: value
      }
    })
  }

  const showErrorToast = (message = '', isError = true) => (
    <CToast title={isError ? t('defaultErrorTitle') : t('congratulations')} autohide={true}>
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill={isError ? '#EB5757' : '#6FCF97'}></rect>
        </svg>
        <strong className="me-auto">{isError ? t('defaultErrorTitle') : t('congratulations')}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const employeesPropsData = {
    shouldDisplayComponent: !isBankUserType && user.status === 'VERIFIED',
    isLoading: loaders.isEmployeesListLoading,
    runningId: loaders.runningId,
    isApprovalRunning: loaders.isCandidateApprovalRunning,
    handleCandidateApproval,
    employeesList,
    showErrorToast,
    addToast,
    loadEmployeesList
  }
  const userContactDataProps = {
    data: formData.contactForm,
    isLoading: loaders.isContactDataLoading,
    isContactDataUpdateRunning: loaders.isContactDataUpdateRunning,
    handleContactDataUpdate,
    onChange,
    userInfo
  }
  const securityDataProps = {
    handlePasswordUpdate,
    isLoading: loaders.isSecurityDataLoading,
    isSecurityUpdateLoading: loaders.isSecurityUpdateLoading,
    data: formData.updatePassword,
    setFormData,
    cleanPasswordData,
    userInfo,
    onChange,
    visible,
    setVisible
  }
  const entityDataProps = {
    company: userInfo?.company,
    userType: rest.userType,
    isBankUserType,
    isLoading: loaders.isEntityDataLoading,
    getCompanyDataHandler
  }
  const documentsPropsData = {
    shouldDisplayComponent: isBusinessUserType ,
    isLoading: loaders.isDocumentsDataLoading,
    deleteDocument: handleDeleteDocument,
    documentsList,
    setDocumentsList,
    handleUploadDocument
  }
  const propsData = {
    user,
    entityDataProps,
    employeesPropsData,
    userContactDataProps,
    securityDataProps,
    documentsPropsData,
    toaster,
    toast,
    verificationButtonHandler,
    ...rest
  }

  return (
    <>
      <Helmet>
        <title>Профиль | Deposit Platform</title>
      </Helmet>
      <ProfileView {...propsData} />
    </>
  )
}

const mapStateToProps = ({ user, isBankUserType, isBusinessUserType }) => ({
  userType: user.type,
  user,
  isBankUserType,
  isBusinessUserType
})
export default connect(mapStateToProps, null)(ProfileContainer)
