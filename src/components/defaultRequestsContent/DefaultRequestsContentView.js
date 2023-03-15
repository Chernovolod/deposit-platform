import React, { useState, useEffect } from 'react'
import {
  CNav,
  CNavLink,
  CNavItem,
  CTabPane,
  CTabContent,
  CButton,
  CCol
} from '@coreui/react'
import { ActionRequestsTab } from 'src/components/actionRequestsTab'
import { ClosedRequestsTab } from 'src/components/closedRequestsTab'
import classnames from 'classnames'
import { USER_TYPE } from 'src/constants'

const NAV_INFO = [1, 2, 3]

const DefaultRequestsContentView = ({ tab, userType, specificModeData, setSpecificModeData, createdRequests, activeRequests, closedRequests, setPageMode, toaster, t, toast, ...rest }) => {
  const setDefaultTab = () => {
    if (tab) return tab
    if (!createdRequests.length) return 2
    return 1
  }
  const isBankUserType = userType === USER_TYPE.BANK
  const [activeKey, setActiveKey] = useState(setDefaultTab())
  useEffect(() => {
    if (tab) setActiveKey(tab)
  }, [tab])
  return (
    <>
      <CNav variant="tabs">
        { NAV_INFO.map(tab => {
          if (tab === 1 && !createdRequests.length) return
          return (
            <CNavItem key={ tab }>
              <CNavLink
                className="pe-auto"
                active={ activeKey === tab }
                onClick={ () => setActiveKey(tab) }
              >
                { t(`requests.${userType}.default.${ tab }`) }
              </CNavLink>
            </CNavItem>
          )
        }) }
      </CNav>
      <CTabContent>
        { activeKey === 1 && <CTabPane visible={ activeKey === 1 }>
          { <ActionRequestsTab {...rest} specificModeData={specificModeData} isNewRequestTab isBankUserType={isBankUserType} setSpecificModeData={setSpecificModeData} setPageMode={setPageMode} activeRequests={createdRequests} /> }
        </CTabPane> }
        { activeKey === 2 && <CTabPane
          className={ classnames({ 'd-flex justify-content-center align-items-center text-center': !activeRequests.length }) }
          visible={ activeKey === 2 }>
          { activeRequests.length
            ? (<ActionRequestsTab specificModeData={specificModeData} isBankUserType={isBankUserType} setSpecificModeData={setSpecificModeData} setPageMode={setPageMode} activeRequests={activeRequests} />)
            : (<CCol style={ { minHeight: '50vh' } } xl={ 8 }
                     className='h-50 d-flex flex-column justify-content-center align-items-center'>
              <h4>
                { t(`requests${isBankUserType ? '.bank' : ''}.default.1.emptyInfo`) }
              </h4>
              { !isBankUserType && <CButton onClick={ () => setPageMode('create') } size="sm" color="primary" className="text-white mt-3 py-2">
                { t('requests.primaryButtonLabel') }
              </CButton> }
            </CCol>) }
        </CTabPane> }
        { activeKey === 3 && <CTabPane visible={ activeKey === 3 }>
          <ClosedRequestsTab isBankUserType closedRequests={closedRequests}/>
        </CTabPane> }
      </CTabContent>
    </>
  )
}

export default DefaultRequestsContentView
