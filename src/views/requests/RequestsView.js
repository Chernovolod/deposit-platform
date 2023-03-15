import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem
} from '@coreui/react'
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/titles/pageTitle';
import Loader from 'src/views/components/loaders/intermittent'
import { USER_TYPE } from 'src/constants'
import RequestAccountApprovalModal from '../../components/requestAccountApprovalModal'
const DefaultRequestsContent = React.lazy(() => import('src/components/defaultRequestsContent'))
const ProfitabilityCalculator = React.lazy(() => import('src/components/profitabilityCalculator'))
const CreateOrder = React.lazy(() => import('src/components/createOrder'))
const SingleRequest = React.lazy(() => import('src/components/singleRequest'))

const RequestsView = ({
                        specificModeData,
                        setSpecificModeData,
                        pageMode,
                        setPageMode,
                        createdRequests,
                        activeRequests,
                        closedRequests,
                        isLoading, userType, ...rest
                      }) => {
  const { t } = useTranslation()
  const setPageTitle = () => t(`requests.${ pageMode }.title`)
  const isDefaultPageMode = pageMode === 'default'
  const isCalculatorPageMode = pageMode === 'calculator'
  const isSpecificPageMode = pageMode === 'specific'
  const isCreatePageMode = pageMode === 'create'
  const renderContent = {
    specific: () => (<SingleRequest userType={userType} setPageMode={ setPageMode } specificModeData={ specificModeData } {...rest}/>),
    calculator: () => (<ProfitabilityCalculator />),
    create: () => (<CreateOrder setPageMode={ setPageMode }/>),
    default: () => (
      <DefaultRequestsContent
        userType={userType}
        activeRequests={activeRequests}
        closedRequests={closedRequests}
        specificModeData={specificModeData}
        setSpecificModeData={ setSpecificModeData }
        createdRequests={ createdRequests }
        setPageMode={ setPageMode }
        {...rest}
      />)
  }

  return (
    <>
      <RequestAccountApprovalModal />
      <PageTitle
        title={ setPageTitle() }
        withPrimaryButton={ userType === USER_TYPE.BUSINESS && isDefaultPageMode }
        withSecondaryButton={ userType === USER_TYPE.BUSINESS && isDefaultPageMode }
        primaryButtonLabel={ t('requests.primaryButtonLabel') }
        secondaryButtonLabel={ t('requests.secondaryButtonLabel') }
        onPrimaryButtonClick={ () => setPageMode('create') }
        onSecondaryButtonClick={ () => setPageMode('calculator') }
      />
      <CBreadcrumb style={ { '--cui-breadcrumb-divider': "'-'" } }>
        { !isDefaultPageMode &&
        <CBreadcrumbItem onClick={ () => setPageMode('default') }>{t('requests.BANK_ADMIN.bankRequests.breadcrumb.1')}</CBreadcrumbItem> }
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

export default RequestsView
