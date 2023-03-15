import React from 'react'
import { CContainer } from '@coreui/react'
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <CContainer className="min-vh-100 d-flex pb-4 pt-5">
      <h1>{t('conditions.title')}</h1>
    </CContainer>
  )
}

export default PrivacyPolicy
