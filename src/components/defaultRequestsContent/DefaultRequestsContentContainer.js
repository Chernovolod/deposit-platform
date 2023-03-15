import React, { useState } from 'react'
import DefaultRequestsContentView from './DefaultRequestsContentView'
import { useTranslation } from 'react-i18next'
import { suggestOffer } from 'src/services'

const DefaultRequestsContentContainer = ({ ...rest }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)

  const suggestRequestHandler = async (form) => {
    try {
      setLoading(true)
      const data = await suggestOffer(form)
    } catch (e) {

    } finally {
      setLoading(false)
    }
  }
  const propsData = {
    suggestRequestHandler,
    isLoading,
    t,
    ...rest
  }
  return (
    <>
      <DefaultRequestsContentView {...propsData} />
    </>
  )
}

export default DefaultRequestsContentContainer
