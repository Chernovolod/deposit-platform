import React, { useState } from 'react'
import {
  CNav,
  CNavLink,
  CNavItem,
  CTabPane,
  CTabContent,
  CButton,
  CCol
} from '@coreui/react'
import { ActionDepositTab } from 'src/components/actionDepositTab'
import { ClosedDepositTab } from 'src/components/closedDepositTab'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'

const NAV_INFO = [1, 2]

const DefaultDepositsContentView = ({ setVisible, setSpecificModeData, activeDeposits, closedDeposits, setPageMode, toaster, toast }) => {
  const { t } = useTranslation()
  const setDefaultTab = () => {
    return 1
  }
  const [activeKey, setActiveKey] = useState(setDefaultTab())
  return (
    <>
      <CNav variant="tabs">
        { NAV_INFO.map(tab => {
          return (
            <CNavItem key={ tab }>
              <CNavLink
                className="pe-auto"
                active={ activeKey === tab }
                onClick={ () => setActiveKey(tab) }
              >
                { t(`deposits.default.${ tab }`) }
              </CNavLink>
            </CNavItem>
          )
        }) }
      </CNav>
      <CTabContent>
        { activeKey === 1 && <CTabPane
          className={ classnames({ 'd-flex justify-content-center align-items-center text-center': !activeDeposits.length }) }
          visible={ activeKey === 1 }>
          { activeDeposits.length
            ? (<ActionDepositTab setSpecificModeData={setSpecificModeData} setPageMode={setPageMode} activeRequests={activeDeposits} />)
            : (<CCol style={ { minHeight: '50vh' } } xl={ 8 }
                     className='h-50 d-flex flex-column justify-content-center align-items-center'>
              <h4>
                { t('deposits.default.1.emptyInfo') }
              </h4>
              <CButton onClick={ () => setVisible(true) } size="sm" color="primary" className="text-white mt-3">
                { t('deposits.primaryButtonLabel') }
              </CButton>
            </CCol>) }
        </CTabPane> }
        { activeKey === 2 && <CTabPane visible={ activeKey === 2 }>
          <ClosedDepositTab setPageMode={setPageMode} setVisible={setVisible} setSpecificModeData={setSpecificModeData} closedDeposits={closedDeposits}/>
        </CTabPane> }
      </CTabContent>
    </>
  )
}

export default DefaultDepositsContentView
