import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../components/titles/pageTitle'
import {
  CBreadcrumb,
  CBreadcrumbItem, CButton, CCol, CForm, CFormControl, CFormSelect, CFormText,
  CModal,
  CModalBody,
  CModalContent, CModalFooter,
  CModalHeader,
  CModalTitle, CRow
} from '@coreui/react'
import Loader from '../components/loaders/intermittent'
import DashboardDefaultContent from 'src/components/dashboardDefaultContent'
import CreateOrder from 'src/components/createOrder'
import CurrenciesContent from 'src/components/currenciesContent'
import RegularLoader from '../components/loaders/regular'
import SingleRequest from 'src/components/singleRequest'

const DashboardView = ({
                         pageMode,
                         setPageMode,
                         isLoading,
                         userType,
                         createDepositHandler,
                         isCreatingOffer,
                         onChange,
                         visible,
                         setVisible,
                         specificModeData,
                         ...rest
                       }) => {
  const { t } = useTranslation()

  const isBankUser = userType === 'BANK_ADMIN'
  const setPageTitle = () => t(`dashboard.title.${ pageMode }`)
  const isDefaultPageMode = pageMode === 'default'
  const isCurrenciesPageMode = pageMode === 'currencies'
  const isCreatePageMode = pageMode === 'create'
  const isSpecificPageMode = pageMode === 'specific'
  const renderContent = {
    currencies: () => (<CurrenciesContent {...rest} />),
    create: () => (<CreateOrder withCalculator setPageMode={ setPageMode } />),
    default: () => (<DashboardDefaultContent setPageMode={ setPageMode } isBankUser={ isBankUser } { ...rest } />),
    specific: () => (<SingleRequest setPageMode={ setPageMode } specificModeData={ specificModeData } />)
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
                  <option value="90">{t('dashboard.modal.form.select.1')}</option>
                  <option value="180">{t('dashboard.modal.form.select.2')}</option>
                  <option value="365">{t('dashboard.modal.form.select.3')}</option>
                  <option value="1095">{t('dashboard.modal.form.select.4')}</option>
                </CFormSelect>
              </CCol>
              <CCol className="p-0 mt-3 mt-md-0" xs={ 12 } xl={ 5 }>
                <CFormText component="span" id="type">{ t('requests.create.form.type') }</CFormText>
                <CFormSelect name="type" onChange={ onChange } aria-describedby="type"
                             aria-label={ t('requests.create.form.type') }>
                  <option value="REVOCABLE">{t('Revocable')}</option>
                  <option value="IRREVOCABLE">{t('Irrevocable')}</option>
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
          <CButton onClick={ createDepositHandler } disabled={ isCreatingOffer }
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
        primaryButtonLabel={ t(`${ isBankUser ? 'deposits' : 'dashboard' }.primaryButtonLabel`) }
        onPrimaryButtonClick={ () => isBankUser ? setVisible(true) : setPageMode('create') }
      />
      <CBreadcrumb style={ { '--cui-breadcrumb-divider': "'-'" } }>
        { !isDefaultPageMode &&
        <CBreadcrumbItem onClick={ () => setPageMode('default') }>{t('dashboard.title.default')}</CBreadcrumbItem> }
        { isCreatePageMode && <CBreadcrumbItem active={ isCreatePageMode }>{t('dashboard.title.create')}</CBreadcrumbItem> }
        { isCurrenciesPageMode && <CBreadcrumbItem active={ isCurrenciesPageMode }>{t('dashboard.title.currencies')}</CBreadcrumbItem> }
        {isSpecificPageMode && <CBreadcrumbItem active={ isSpecificPageMode }>{t('dashboard.title.specific')}</CBreadcrumbItem> }
      </CBreadcrumb>
      { isLoading
        ? <Loader classes="mt-5"/>
        : renderContent[pageMode]() }
      { renderCreateDepositModal() }
    </>
  )
}

export default DashboardView
