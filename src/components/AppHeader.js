import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppBreadcrumb } from './index'

import { AppHeaderDropdown } from './header/index'

const AppHeader = ({ user: { company } }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="bg-primary d-md-none">
      <CContainer fluid>
        <CHeaderBrand className="" href="/dashboard">
          <CIcon className="sidebar-brand-full" name="logo" height={56} />
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="47" >
            <rect x="5" y="1" width="1" height="45" fill="#F2F2F2" opacity=".5"/>
          </svg>
          <span className="company-name mx-2 text-white">{ company?.name }</span>
        </CHeaderBrand>
        <CHeaderToggler
          className="ms-md-3"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon className="text-white" name="menu" size="lg" />
        </CHeaderToggler>
        {/*<CHeaderNav className="d-none d-md-flex me-auto">*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink to="/dashboard" component={NavLink} activeClassName="active">*/}
        {/*      Dashboard*/}
        {/*    </CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink href="#">Users</CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink href="#">Settings</CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*</CHeaderNav>*/}
        {/*<CHeaderNav>*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink href="#">*/}
        {/*      <CIcon name="cil-bell" size="lg" />*/}
        {/*    </CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink href="#">*/}
        {/*      <CIcon name="cil-list" size="lg" />*/}
        {/*    </CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*  <CNavItem>*/}
        {/*    <CNavLink href="#">*/}
        {/*      <CIcon name="cil-envelope-open" size="lg" />*/}
        {/*    </CNavLink>*/}
        {/*  </CNavItem>*/}
        {/*</CHeaderNav>*/}
        {/*<CHeaderNav className="ms-3">*/}
        {/*  <AppHeaderDropdown />*/}
        {/*</CHeaderNav>*/}
      </CContainer>
      {/*<CHeaderDivider />*/}
      {/*<CContainer fluid>*/}
      {/*  /!*<AppBreadcrumb />*!/*/}
      {/*</CContainer>*/}
    </CHeader>
  )
}

const mapStateToProps = ({ user, isBusinessUserType, isBankUserType }) => ({
  user,
  isBusinessUserType,
  isBankUserType
})

export default (connect(mapStateToProps, null)(React.memo(AppHeader)))
