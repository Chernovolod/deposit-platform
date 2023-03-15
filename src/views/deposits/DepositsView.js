import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem, CButton,
  CCol, CForm,
  CFormControl,
  CFormFloating,
  CFormLabel, CFormSelect, CFormText, CModal,
  CModalBody,
  CModalContent, CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/titles/pageTitle';
import Loader from 'src/views/components/loaders/intermittent'
import RegularLoader from '../components/loaders/regular'
// import DefaultDepositsContent from 'src/components/defaultDepositsContent'
// import SingleRequest from 'src/components/singleRequest'

const DefaultDepositsContent = React.lazy(() => import('src/components/defaultDepositsContent'))
const SingleDeposit = React.lazy(() => import('src/components/singleDeposit'))

const DepositsView = ({
                        createDepositHandler,
                        specificModeData,
                        setSpecificModeData,
                        pageMode,
                        setPageMode,
                        closedDeposits,
                        activeDeposits,
                        isLoading,
                        visible,
                        setVisible,
                        onChange,
                        isCreatingOffer
                      }) => {
  const { t } = useTranslation()
  const setPageTitle = () => t(`deposits.${ pageMode }.title`)
  const isDefaultPageMode = pageMode === 'default'
  const isSpecificPageMode = pageMode === 'specific'
  const renderContent = {
    specific: () => (<SingleDeposit setPageMode={ setPageMode } specificModeData={ specificModeData }/>),
    default: () => (
      <DefaultDepositsContent
        activeDeposits={ activeDeposits }
        closedDeposits={ closedDeposits }
        setSpecificModeData={ setSpecificModeData }
        setPageMode={ setPageMode }
        setVisible={ setVisible }
      />)
  }
  const onSubmit = () => {
    createDepositHandler()
  }
  const renderCreateDepositModal = () => (
    <CModal alignment="center" visible={ visible } onDismiss={ () => setVisible(false) }>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={ () => setVisible(false) }>
          <CModalTitle component="h2">{ t('deposits.modal.title') }</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
          <CForm>
            <CRow className="m-0">
              <CCol xs={ 4 } xl={ 2 } className="amount-container px-0 me-md-3">
                <CFormText component="span" id="percentage">{ t('requests.create.form.percentage') }</CFormText>
                <CFormControl
                  aria-describedby="percentage"
                  autoComplete="off"
                  type="number"
                  name="percentage"
                  id="percentage"
                  // placeholder="%"
                  onChange={ onChange }
                />
              </CCol>
              <CCol xs={ 8 } className="ps-2 ps-md-0" xl={ 4 }>
                <CFormText component="span" id="days">{ t('requests.create.form.days') }</CFormText>
                <CFormSelect name="days"
                             onChange={ onChange }
                             aria-describedby="days" aria-label={ t('requests.create.form.days') }>
                  <option value="90">{t('requests.days.90')}</option>
                  <option value="180">{t('requests.days.180')}</option>
                  <option value="365">{t('requests.days.365')}</option>
                  <option value="1095">{t('requests.days.1095')}</option>
                </CFormSelect>
              </CCol>
              <CCol className="p-0 mt-3 mt-md-0" xs={ 12 } xl={ 5 }>
                <CFormText component="span" id="type">{ t('requests.create.form.type') }</CFormText>
                <CFormSelect name="type" onChange={ onChange } aria-describedby="type"
                             aria-label={ t('requests.create.form.type') }>
                  <option value="IRREVOCABLE">{t('Irrevocable')}</option>
                  <option value="REVOCABLE">{t('Revocable')}</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mt-3 mt-md-4">
              <CCol className="mt-3 mt-md-0" xs={ 12 } xl={ 5 }>
                <CFormText component="span" id="minAmount">{ t('requests.create.form.minimalAmount') }</CFormText>
                <CFormControl
                  aria-describedby="minAmount"
                  autoComplete="off"
                  type="number"
                  name="minAmount"
                  id="minAmount"
                  placeholder="0"
                  onChange={ onChange }
                />
              </CCol>
              <CCol className="mt-3 mt-md-0" xs={ 12 } xl={ 5 }>
                <CFormText component="span" id="maxAmount">{ t('requests.create.form.maximumAmount') }</CFormText>
                <CFormControl
                  aria-describedby="maxAmount"
                  autoComplete="off"
                  type="number"
                  name="maxAmount"
                  id="maxAmount"
                  placeholder="0"
                  onChange={ onChange }
                />
              </CCol>
              <CCol className="mt-3 mt-md-0" xl={ 2 }>
                <CFormText component="span" id="currency">{ t('requests.create.form.currency') }</CFormText>
                <CFormSelect name="currency" onChange={ onChange } aria-describedby="currency"
                             aria-label={ t('requests.create.form.currency') }>
                  <option value="BYN">{t('BYN')}</option>
                  <option value="USD">{t('USD')}</option>
                  <option value="EUR">{t('EUR')}</option>
                  <option value="RUB">{t('RUB')}</option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter className="justify-content-start">
          <CButton onClick={ onSubmit } disabled={ isCreatingOffer }
                   className="text-white py-2 col-12 col-md-6" size="sm"
                   color="primary">
            { isCreatingOffer ? <RegularLoader classes="text-white"/> : t('deposits.modal.primaryButton') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  return (
    <>
      <PageTitle
        title={ setPageTitle() }
        withPrimaryButton={ isDefaultPageMode }
        primaryButtonLabel={ t('deposits.primaryButtonLabel') }
        onPrimaryButtonClick={ () => setVisible(true) }
      />
      <CBreadcrumb style={ { '--cui-breadcrumb-divider': "'-'" } }>
        { !isDefaultPageMode &&
        <CBreadcrumbItem onClick={ () => setPageMode('default') }>{ t('deposits.default.title') }</CBreadcrumbItem> }
        { isSpecificPageMode &&
        <CBreadcrumbItem active={ isSpecificPageMode }>{ t('deposits.specific.title') }</CBreadcrumbItem> }
      </CBreadcrumb>
      { isLoading
        ? <Loader classes="mt-5"/>
        : renderContent[pageMode]() }
      { renderCreateDepositModal() }
    </>
  )
}

export default DepositsView
