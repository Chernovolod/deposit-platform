import React from 'react'
import {
	CCol,
	CButton
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const ProfileTitle = ({ title, editable, onEdit, buttonLabel }) => {
	const { t } = useTranslation()
	
	return (
		<>
			<CCol className="mt-5 mb-3 d-flex justify-content-between align-items-stretch">
				<h4>{title}</h4>
				{editable && <CButton onClick={onEdit} color="secondary" variant="ghost">{buttonLabel || t('edit')}</CButton>}
			</CCol>
		</>
	)
}

export default ProfileTitle
