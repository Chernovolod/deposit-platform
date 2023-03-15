import React from 'react'
import {
	CCol,
	CButton
} from '@coreui/react'
import classnames from 'classnames'

const ProfileTitle = ({
	title,
	withPrimaryButton,
	withSecondaryButton,
	primaryButtonLabel,
	secondaryButtonLabel,
	onPrimaryButtonClick,
	onSecondaryButtonClick
}) => (
	<CCol xl={ 12 } className="mb-3 d-flex flex-column flex-md-row justify-content-between">
		<h2>{title}</h2>
		<CCol className="d-flex flex-wrap flex-md-nowrap justify-content-md-end" xs={ 12 } md={ 6 } >
			{
				withSecondaryButton &&
				<CButton onClick={onSecondaryButtonClick} size="sm" className={ classnames('mb-3 mb-md-0 col-12 col-md-6 py-2', { 'me-0 me-md-3': withPrimaryButton }) } color="primary" variant="outline">
					{secondaryButtonLabel}
				</CButton>
			}
			{
				withPrimaryButton &&
				<CButton onClick={onPrimaryButtonClick} size="sm" className="text-white col-12 col-md-6 py-2" color="primary">
					{primaryButtonLabel}
				</CButton>
			}
		</CCol>
	</CCol>
)

export default ProfileTitle
