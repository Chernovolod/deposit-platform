import React, { useState } from 'react'
import {
  CCard,
  CCol,
  CRow,
  CButton,
  CCardBody,
  CFormControl,
//   CFormFloating,
  // CFormLabel,
	CFormText,
  CModal,
  CModalContent,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CForm
} from '@coreui/react'
import { ProfileTitle } from 'src/views/components/titles/profileTitle'
import Loader from 'src/views/components/loaders/intermittent'
import { useTranslation } from 'react-i18next'
import { isEmpty } from 'src/utils/objectUtils'
import classnames from 'classnames'

const Entity = ({ isLoading, getCompanyDataHandler, userType, isBankUserType, company: { name, legalInfo } }) => {
	const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({unpNumber: ''})
	const onSubmit = () => {
		getCompanyDataHandler(formData.unpNumber)
	}
  const onChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const renderEditModal = () => (
    <CModal alignment="center" visible={visible} onDismiss={() => setVisible(false)}>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle component="h2">{t('edit.pending')}</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
          <CForm></CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton className="text-white py-2" size="sm" color="primary" >{t('save')}</CButton>
          <CButton className="mx-3 py-2" color="primary" size="sm" variant="outline" onClick={() => setVisible(false)}>
            {t('cancel')}
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
	const renderCheckingContent = () => (
		<>
			<CRow className="align-items-stretch">
				<p>{t('profile.entity.checkUNPText')}</p>
			</CRow>
			<CRow className="align-items-center m-0">
				<CCol className="p-0 me-md-3" md={3} xs={12} xl={ 2 }>
        	<CFormText component="span" id="UNP">{ t('UNP') }</CFormText>
          <CFormControl
						value={formData.unp}
            autoComplete="off"
            type="number"
            name="unpNumber"
            id="UNP"
            placeholder="10008858"
            onChange={ onChange }
          />
        </CCol>
				<CCol className="mt-4 mt-md-0 p-0 align-self-end" xl={ 3 } md={ 9 } xs={ 12 }>
					<CButton onClick={onSubmit} disabled={ isLoading || isEmpty(formData) } className="rounded-3 col-12 text-white mt-3 mt-md-0">{t('verification.button')}</CButton>
        </CCol>
			</CRow>
		</>
	)
	const renderContent = () => (
		<>
			<CRow className="align-items-stretch">
				<CCol xl={3}>
					<small className="text-muted">{t(`profile.${userType}.entity.name`)}</small>
					<h6 className="m-0">{name}</h6>
				</CCol>
				{isBankUserType && <CCol xl={ 3 }>
					<small className="text-muted">{ t('profile.entity.specialist') }</small>
					<h6 className="m-0">Замоканный спец</h6>
				</CCol> }
				{!isBankUserType && <CCol xl={ 3 }>
					<small className="text-muted">{ t('profile.entity.UNP') }</small>
					<span className="d-block">{ legalInfo.unp }</span>
				</CCol> }
				{!isBankUserType && <CCol xl={ 3 }>
					<small className="text-muted">{ t('profile.entity.registerDate') }</small>
					<span className="d-block">{ legalInfo.registrationDate }</span>
				</CCol> }
				{!isBankUserType && <CCol xl={ 3 }>
					<small className="text-muted">{ t('profile.entity.authority') }</small>
					<span className="d-block">{ legalInfo.issuer }</span>
				</CCol> }
			</CRow>
			{!isBankUserType && <CRow className="my-4">
				<CCol xl={ 12 }>
					<small className="text-muted">{ t('profile.entity.entityForm') }</small>
					<h6 className="m-0">{ legalInfo.type }</h6>
				</CCol>
			</CRow> }
			<CRow className={classnames({'mt-4': isBankUserType})}>
				<CCol xl={12}>
					<small className="text-muted">{t(`profile.${userType}.entity.address`)}</small>
					<h6 className="m-0">{ legalInfo.address }</h6>
				</CCol>
			</CRow>
		</>
	)

	return (
		<>
			<ProfileTitle title={legalInfo.unp || isBankUserType ? t(`profile.${userType}.entity.subtitle`) : t('profile.entity.UNP')} onEdit={() => setVisible(!visible)} />
			<CCard>
				{ legalInfo.unp || isBankUserType ?
				<CCardBody className="py-4">
						{isLoading && <Loader />}
						{!isLoading && renderContent()}
					</CCardBody>
				: <CCardBody className="py-4">
						{isLoading && <Loader />}
						{!isLoading && renderCheckingContent()}
					</CCardBody> }
			</CCard>
      {renderEditModal()}
		</>
	)
}

export default Entity
