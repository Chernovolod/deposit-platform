import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem
} from '@coreui/react'
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/titles/pageTitle';
import Loader from 'src/views/components/loaders/intermittent'

const DefaultRequestsContent = React.lazy(() => import('src/components/defaultRequestsContent'))
const ProfitabilityCalculator = React.lazy(() => import('src/components/profitabilityCalculator'))
const CreateOrder = React.lazy(() => import('src/components/createOrder'))
const SingleRequest = React.lazy(() => import('src/components/singleRequest'))

const BankRequestsView = ({
                        specificModeData,
                        setSpecificModeData,
                        pageMode,
                        setPageMode,
                        createdRequests,
                        activeRequests,
                        closedRequests,
                        isLoading
                      }) => {
  const { t } = useTranslation()
  const setPageTitle = () => t(`requests.${ pageMode }.title`)
  const isDefaultPageMode = pageMode === 'default'
  const isCalculatorPageMode = pageMode === 'calculator'
  const isSpecificPageMode = pageMode === 'specific'
  const isCreatePageMode = pageMode === 'create'

  const renderContent = {
    specific: () => (<SingleRequest setPageMode={ setPageMode } specificModeData={ specificModeData }/>),
    calculator: () => (<ProfitabilityCalculator />),
    create: () => (<CreateOrder setPageMode={ setPageMode }/>),
    default: () => (
      <DefaultRequestsContent
        activeRequests={activeRequests}
        closedRequests={closedRequests}
        setSpecificModeData={ setSpecificModeData }
        createdRequests={ createdRequests }
        setPageMode={ setPageMode }
      />)
  }
  return (
    <>
      <PageTitle
        title={ setPageTitle() }
        withPrimaryButton={ isDefaultPageMode }
        withSecondaryButton={ isDefaultPageMode }
        primaryButtonLabel={ t('requests.primaryButtonLabel') }
        secondaryButtonLabel={ t('requests.secondaryButtonLabel') }
        onPrimaryButtonClick={ () => setPageMode('create') }
        onSecondaryButtonClick={ () => setPageMode('calculator') }
      />
      <CBreadcrumb style={ { '--cui-breadcrumb-divider': "'-'" } }>
        { !isDefaultPageMode &&
        <CBreadcrumbItem onClick={ () => setPageMode('default') } href="/requests">{t('requests.BANK_ADMIN.bankRequests.breadcrumb.1')}</CBreadcrumbItem> }
        { isSpecificPageMode && <CBreadcrumbItem active={ isSpecificPageMode }>{t('requests.BANK_ADMIN.bankRequests.breadcrumb.2')}</CBreadcrumbItem> }
        { isCreatePageMode && <CBreadcrumbItem active={ isCreatePageMode }>{t('requests.BANK_ADMIN.bankRequests.breadcrumb.3')}</CBreadcrumbItem> }
        { isCalculatorPageMode &&
        <CBreadcrumbItem active={ isCalculatorPageMode }>{t('requests.BANK_ADMIN.bankRequests.breadcrumb.4')}</CBreadcrumbItem> }
      </CBreadcrumb>
      { isLoading
        ? <Loader classes="mt-5"/>
        : renderContent[pageMode]() }
    </>
  )
}

export default BankRequestsView
