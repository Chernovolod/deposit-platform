import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CLink,
  CRow,
  CListGroupItem,
  CModal,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CModalBody, CForm, CFormText, CFormControl, CFormSelect, CModalFooter
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import RegularLoader from '../components/loaders/regular'

const SingleOffer = ({
                       applyOfferHandler,
                       setApprovalModalVisible,
                       user,
                       offerInfo: {
                         id, name, currency, percentage, minAmount, maxAmount, type, days,
                       }
                     }) => {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [valid, setValid] = useState(true)
  const [formData, setFormData] = useState({
    amount: minAmount
  })
  const [visible, setVisible] = useState(false)
  const onChange = ({ target: { name, value } }) => {
    if ((Number(value) < minAmount && Number(value) !== minAmount) || (Number(value) > maxAmount && Number(value) !== maxAmount)) {
      setValid(false)
    } else {
      setValid(true)
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onClick = () => {
    try {
      setLoading(true)
      applyOfferHandler(formData, id)
    } catch (e) {

    } finally {
      setLoading(false)
      setVisible(false)
    }
  }
  const handleClick = () => {
    if (user.type !== 'BANK_ADMIN' && user.status !== 'VERIFIED') {
      setApprovalModalVisible(true)
      return
    }
    setVisible(true)
  }
  const renderCreateDepositModal = () => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('offers.apply') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
          <CForm>
            <CRow className="mt-4">
              <CCol xl={ 9 }>
                <CFormText component="span"
                           id="amount">{ `${ t('requests.create.form.applyAmount') } ${ currency }` }</CFormText>
                <CFormControl
                  valid={ valid }
                  invalid={ !valid }
                  aria-describedby="amount"
                  autoComplete="off"
                  type="number"
                  min={ minAmount }
                  name="amount"
                  id="amount"
                  value={ formData.amount }
                  placeholder={ minAmount }
                  onChange={ onChange }
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton onClick={ onClick }
                   disabled={ isLoading || !valid }
                   className="text-white py-2" size="sm"
                   color="primary">
            { isLoading
              ? <RegularLoader classes="text-white"/>
              : t('offers.send') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  return (
    <>
      <CListGroupItem className="employees py-4 px-2 px-md-3" key={ id }>
        <CRow className="align-items-stretch m-0">
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{t('bank')}</small>
            <h6 className="m-0">{ name }</h6>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.percentage') }</small>
            <span className="d-block">{ `${ percentage } %` }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.days') }</small>
            <span className="d-block">{ t(`requests.days.${ days }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
            <small className="text-muted">{ t('requests.create.form.type') }</small>
            <span className="d-block">{ t(`requests.${ type }`) }</span>
          </CCol>
          <CCol className="mb-3 mb-md-0" xs={ 6 } xl={ 3 }>
            <small className="text-muted">{ t('requests.create.form.minMax') }</small>
            <span className="d-block">{ `${ minAmount } ${ currency } - ${ maxAmount } ${ currency }` }</span>
          </CCol>
          <CCol xs={ 6 } xl={ 1 }
              className="d-flex align-self-center justify-content-end ms-auto ms-0 text-end text-md-start justify-content-md-start justify-content-xl-end">
            <CLink
              role="button"
              className="text-start"
              onClick={ handleClick }
            >
              {t('requests.create.form.acceptRequest')}
            </CLink>
          </CCol>
        </CRow>
      </CListGroupItem>
      { renderCreateDepositModal() }
    </>
  )
}

export default SingleOffer
