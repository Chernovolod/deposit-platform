import React from 'react'
import DefaultDepositsContentView from './DefaultDepositsContentView'
import { useTranslation } from 'react-i18next'

const DefaultDepositsContentContainer = ({ ...rest }) => {
  const { t } = useTranslation()

  const propsData = {
    ...rest
  }
  return (
    <>
      <DefaultDepositsContentView {...propsData} />
    </>
  )
}

export default DefaultDepositsContentContainer
