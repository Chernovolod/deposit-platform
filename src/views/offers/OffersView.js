import React from 'react'
import {
  CToaster,
	CCard,
	CCol,
	CRow,
	CCardBody,
	CListGroup,
	CListGroupItem,
	CButton
} from '@coreui/react'
import RegularLoader from 'src/views/components/loaders/regular'
import Loader from 'src/views/components/loaders/intermittent'
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/titles/pageTitle';
import SingleOffer from './SingleOffer'

const OffersView = ({ setApprovalModalVisible, user, loading, offersList, toaster, toast, applyOfferHandler }) => {
  const { t } = useTranslation();
  const renderOffersList = () => offersList.map((offerInfo) => (
    <SingleOffer user={user} setApprovalModalVisible={setApprovalModalVisible} key={offerInfo.id} applyOfferHandler={applyOfferHandler} offerInfo={offerInfo} />
  ))
	const renderEmptyMessage = () => (<p className="text-center m-0">{t('offers.empty')}</p>)

  return (
    <>
      <PageTitle
        title={t('offers.title')}
      />
      {(loading || (!loading && !offersList.length)) &&
				<CCard className="mt-5">
					<CCardBody>
						{loading && <Loader />}
						{(!loading && !offersList.length) && renderEmptyMessage()}
					</CCardBody>
				</CCard>}
			{(!loading && !!offersList.length) && <CListGroup className="employees">{renderOffersList()}</CListGroup>}
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default OffersView
