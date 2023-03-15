import React, { useEffect, useRef, useState } from 'react'
import CurrenciesContentView from './CurrenciesContentView'
import { useTranslation } from 'react-i18next'
import { getCurrencies } from '../../services'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

const CurrenciesContentContainer = ({ ...rest }) => {
  const toaster = useRef()
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState([])
  const [toast, addToast] = useState(0)
  const [currencies, setCurrencies] = useState([
  {
    currency: 'BYN',
    buy: '1',
    sell: '1',
    amount: 1
  }])

  useEffect(async () => {
    if (currencies.length > 1) return
    try {
      setLoading(true)
      const data = await getCurrencies()
      if (data.length && !data.message) {
        const items = [...currencies, ...data].map((el) => {
          return {
            ...el,
            saved: el.buy,
            buy: Number((1 / el.buy).toFixed(4))
          }
        })
        setCurrencies(items)
        setFormData(items)
      }
    } catch (e) {
      console.log(e)
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }, [])

  const onChange = ({target: { name, value, dataset: { saved } }}) => {
    const newData = currencies.map(el => {
      if (name !== 'BYN' && el.currency === 'BYN') {
        return {...el, buy: Number(Number(saved) * parseFloat(value)) || '0'}
      }
      if (el.currency === name) {
        return {...el, buy: value.includes('.') ? value : Number((parseFloat(value)).toFixed(4)) || '0'}
      } else {
        return { ...el, buy: Number((Number(saved) / Number(el.saved) * parseFloat(value)).toFixed(4)) || '0'}
      } // no idea what's going on here, just implemented this
      return el
    })
    setCurrencies(newData)
    setFormData(newData)
  }

  const showErrorToast = (message = '') => (
    <CToast title={ t('defaultErrorTitle') } autohide={ true }>
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
          <rect width="100%" height="100%" fill="#EB5757"></rect>
        </svg>
        <strong className="me-auto">{ t('defaultErrorTitle') }</strong>
      </CToastHeader>
      <CToastBody>{ message || t('default400Error') }</CToastBody>
    </CToast>
  )

  const propsData = {
    isLoading,
    formData,
    currencies,
    onChange,
    toaster,
    toast,
    ...rest
  }
  return (
    <>
      <CurrenciesContentView { ...propsData } />
    </>
  )
}

export default CurrenciesContentContainer
