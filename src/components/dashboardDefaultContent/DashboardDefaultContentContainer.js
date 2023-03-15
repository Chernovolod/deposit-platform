import React, { useEffect, useState } from 'react'
import DashboardDefaultContentView from './DashboardDefaultContentView'
import { useTranslation } from 'react-i18next'
import { USER_TYPE } from '../../constants'
import { createDeposit, getRequests } from '../../services'
import {getBankBarStatistic, getBankDonutStatistics, getBusinessStatistic} from "../../services/dashboard";

const DashboardDefaultContentContainer = ({ setPageMode, isBankUser, ...rest }) => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [barStatistics, setBarStatistics] = useState([])
  const [donutBankStatistics, setDonutBankStatistics] = useState({
    totalRevenue: {}
  })
  const [formData, setFormData] = useState({
    type: 'IRREVOCABLE',
    percentage: 0,
    currency: 'BYN',
    days: 90,
    minAmount: 0,
    maxAmount: 0
  })
  const [isCreatingOffer, setIsCreatingOffer] = useState(false)

  useEffect(async () => {
    if (isBankUser) {
      const donutData = await getBankDonutStatistics()
      setDonutBankStatistics(donutData)
      // const data = await getBankBarStatistic()
      // setBarStatistics(data)
    } else {
      const data = await getBusinessStatistic()
      setBarStatistics(data)
    }
  }, [])

  const propsData = {
    donutBankStatistics,
    barStatistics,
    visible,
    setVisible,
    isCreatingOffer,
    isBankUser,
    setPageMode,
    ...rest
  }
  return (
    <>
      <DashboardDefaultContentView { ...propsData } />
    </>
  )
}

export default DashboardDefaultContentContainer
