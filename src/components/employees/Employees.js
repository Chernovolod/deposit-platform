import React, {useEffect, useState} from 'react'
import {
	CCard,
	CCol,
	CRow,
	CLink,
	CCardBody,
	CListGroup,
	CListGroupItem,
	CButton,
	CModal,
	CModalContent,
	CModalHeader,
	CModalBody,
	CModalTitle,
	CModalFooter,
	CFormControl,
	CForm,
	CFormFloating,
	CFormText,
	CFormLabel,
} from '@coreui/react'
import { ProfileTitle } from 'src/views/components/titles/profileTitle'
import RegularLoader from 'src/views/components/loaders/regular'
import Loader from 'src/views/components/loaders/intermittent'
import { useTranslation } from 'react-i18next'
import { CANDIDATE_TYPE } from 'src/constants'
import { isEmpty } from 'src/utils'
import {
	linkEmployee
} from 'src/services'

const INITIAL_FORM_DATA = {
	email: '',
	firstName: '',
	middleName: '',
	lastName: '',
}

const SingleEmployee = ({ runningId, isApprovalRunning, id, fields, t, email, isPendingCandidate, handleCandidateApproval, setButtonLabel }) => (
	<CListGroupItem className="employees py-2 py-md-4" key={id}>
		<CRow className="align-items-stretch">
			<CCol className="mb-3 mb-md-0" xl={6}>
				<small className="text-muted">{t('fullName')}</small>
				<h6 className="m-0">{t('profile.employees.fullUserName', { ...fields })}</h6>
			</CCol>
			<CCol xl={3}>
				<small className="text-muted">{t('email.short')}</small>
				<span className="d-block">{email}</span>
			</CCol>
			<CCol xl={3} className="d-flex align-self-center justify-content-end">
				<CLink
					key={id}
					role="button"
					className={`text-end ${!isPendingCandidate ? 'text-primary' : 'text-danger'}`}
					data-id={id}
					data-approved={!isPendingCandidate}
					data-email={email}
					onClick={handleCandidateApproval}
				>
					{isApprovalRunning && id === runningId ? <RegularLoader /> : setButtonLabel(isPendingCandidate)}
				</CLink>
			</CCol>
		</CRow>
	</CListGroupItem>
)

const Employees = ({ addToast, showErrorToast, employeesList, loadEmployeesList, isLoading, isApprovalRunning, handleCandidateApproval, runningId }) => {
	const { t } = useTranslation()
	const setButtonLabel = (isPendingCandidate) => {
		return t(!isPendingCandidate ? 'approveRequest' : 'delete')
	}
	const renderEmployeesList = () => employeesList.map(({ id, fields, email, type }) => {
		const isPendingCandidate = type !== CANDIDATE_TYPE.BUSINESS_LINKING_CANDIDATE
		return (
				<SingleEmployee runningId={runningId} id={id} isApprovalRunning={isApprovalRunning} isPendingCandidate={isPendingCandidate} fields={fields} email={email} handleCandidateApproval={handleCandidateApproval} t={t} setButtonLabel={setButtonLabel} />
		)
	})

	const [formData, setFormData] = useState(INITIAL_FORM_DATA)

	const [visible, setVisible] = useState(false)
	const [isValidate, setValidation] = useState(true)

	const handleInviteEmployee = async () => {
		try {
			const response = await linkEmployee(formData)
			if (response?.token) {
        loadEmployeesList()
				closeInviteEmployeeModal()
				addToast(() => showErrorToast(t('profile.employees.modal.success'), false))
			}
			if (response?.message) {
				addToast(() => showErrorToast(response.message))
			}
		} catch (e) {
			addToast(() => showErrorToast())
		} finally {

		}
	}
	const validateForm = (name, value) => {
		if (name === 'email') {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			const isEmailValid = re.test(String(value).toLowerCase())
			if (isEmailValid) {
				setValidation(true)
			} else {
				setValidation(false)
			}
		}
	}

	const onChange = ({ target: { name, value } }) => {
		setFormData({
			...formData,
			[name]: value
		})
		if (name && value) validateForm(name, value)
	}

	const closeInviteEmployeeModal = () => {
		setFormData(INITIAL_FORM_DATA)
		setVisible(false)
		setValidation(true)
	}

	const renderInviteEmployeeModal = () => (
		<CModal alignment="center" visible={visible} onDismiss={closeInviteEmployeeModal}>
			<CModalContent className="pb-4 px-3">
				<CModalHeader onDismiss={closeInviteEmployeeModal}>
					<CModalTitle component="h2">{t('profile.employees.modal.title')}</CModalTitle>
				</CModalHeader>
				<CModalBody className="mb-7">
					<CForm>
						<CFormFloating>
							<CFormControl
								value={formData.email || ''}
								autoComplete="off"
								type="text"
								name="email"
								id="email"
								onChange={onChange}
								placeholder={t('email')}
								invalid={ !isValidate}
								valid={ Boolean(formData.email && isValidate )}
							/>
							<CFormLabel htmlFor="email">{t('email')}</CFormLabel>
						</CFormFloating>
						<CFormFloating>
							<CFormControl
								value={formData.lastName || ''}
								autoComplete="off"
								type="text"
								name="lastName"
								id="lastName"
								placeholder={t('lastName')}
								onChange={onChange}
							/>
							<CFormLabel htmlFor="lastName">{t('lastName')}</CFormLabel>
						</CFormFloating>
						<CFormFloating>
							<CFormControl
								value={formData.firstName || ''}
								autoComplete="off"
								type="text"
								name="firstName"
								id="firstName"
								placeholder={t('firstName')}
								onChange={onChange}
							/>
							<CFormLabel htmlFor="firstName">{t('firstName')}</CFormLabel>
						</CFormFloating>
						<CFormFloating>
							<CFormControl
								value={formData.middleName || ''}
								autoComplete="off"
								type="text"
								name="middleName"
								id="middleName"
								placeholder={t('middleName')}
								onChange={onChange}
							/>
							<CFormLabel htmlFor="middleName">{t('middleName')}</CFormLabel>
						</CFormFloating>
					</CForm>
				</CModalBody>
				<CModalFooter className="justify-content-start">
					<CButton
						onClick={handleInviteEmployee}
						disabled={!isValidate || isEmpty(formData) || isLoading}
						className="text-white py-2" size="sm" color="primary">
						{isLoading ? <RegularLoader classes="text-white" /> : t('profile.employees.modal.button')}
					</CButton>
					<CButton className="mx-3 py-2" color="primary" size="sm" variant="outline"
						onClick={closeInviteEmployeeModal}>
						{t('cancel')}
					</CButton>
				</CModalFooter>
			</CModalContent>
		</CModal>
	)

	const renderEmptyMessage = () => (<p className="text-center m-0">{ t('profile.employees.empty') }</p>)

	return (
		<>
			<ProfileTitle title={t('profile.employees.subtitle')} buttonLabel={t('profile.employees.button')} onEdit={() => setVisible(true)} editable />
			{(isLoading || (!isLoading && !employeesList.length)) &&
				<CCard className="mt-5">
					<CCardBody>
						{isLoading && <Loader />}
						{(!isLoading && !employeesList.length) && renderEmptyMessage()}
					</CCardBody>
				</CCard>}
			{(!isLoading && !!employeesList.length) && <CListGroup className="employees">{renderEmployeesList()}</CListGroup>}
			{renderInviteEmployeeModal()}
		</>
	)
}

export default Employees
