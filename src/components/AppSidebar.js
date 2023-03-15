import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { useTranslation, t } from 'react-i18next'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import { navigation } from '../_nav'
import { ExchangeDropdown } from 'src/components/exchangeDropdown/ExchangeDropdown'
import { RatesDropdown } from 'src/components/ratesDropdown/RatesDropdown'
import { Link } from 'react-router-dom'

// const LANGUAGE_SET = {
//   ru: {
//     key: 'ru',
//     label: 'Рус'
//   },
//   ukr: {
//     key: 'ukr',
//     label: 'Укр'
//   }
// }

const AppSidebar = ({ user: { company, type, status }, isBusinessUserType, isBankUserType, ...rest }) => {
  const { i18n, t } = useTranslation()
  const [nav, setNav] = useState([])
  useEffect(() => {
    const personalNav = navigation(status)[type]
    if (personalNav) {
      setNav(personalNav())
    } else return
  }, [type])
  const [currentLanguage, setLanguage] = useState('pl')
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const handleLanguages = ({ target: { dataset: { language } } }) => {
    if (currentLanguage !== language) {
      setLanguage(language)
      i18n.changeLanguage(language)
    }
  }

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={ unfoldable }
      show={ sidebarShow }
      // onShow={}
      onHide={ () => {
        window.scrollTo(0, 0)
        dispatch({ type: 'set', sidebarShow: false })
      } }
    >
      <CSidebarBrand className="d-none d-md-flex justify-content-start px-3 pt-3 mb-2" to="/">
        <Link to='/landing'>
          <CIcon style={{pointerEvents: 'none'}} className="sidebar-brand-full" name="logo" height={ 56 }/>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="47">
          <rect x="5" y="1" width="1" height="45" fill="#F2F2F2" opacity=".5"/>
        </svg>
        <span className="company-name mx-2">{ company?.name }</span>
      </CSidebarBrand>
      {/*<div className="d-flex justify-content-between px-3 my-3">*/ }
      {/*  <CCol xl={8} className="pe-3">*/ }
      {/*    /!*<CDropdown className="w-100">*!/*/ }
      {/*    /!*  <CDropdownToggle className="text-white" color="primary">Минск</CDropdownToggle>*!/*/ }
      {/*    /!*  <CDropdownMenu className="start-0 end-0">*!/*/ }
      {/*    /!*    <CDropdownItem className="text-white" href="#">Мнск</CDropdownItem>*!/*/ }
      {/*    /!*    <CDropdownItem className="text-white" href="#">Киев</CDropdownItem>*!/*/ }
      {/*    /!*    <CDropdownItem className="text-white" href="#">Мухосранск</CDropdownItem>*!/*/ }
      {/*    /!*  </CDropdownMenu>*!/*/ }
      {/*    /!*</CDropdown>*!/*/ }
      {/*  </CCol>*/ }
      {/*  <CCol xl={4} className="p-0 pl-3">*/ }
      {/*    <CDropdown>*/ }
      {/*      <CDropdownToggle className="text-white" color="primary">{LANGUAGE_SET[currentLanguage].label}</CDropdownToggle>*/ }
      {/*      <CDropdownMenu className="start-0 end-0">*/ }
      {/*        <CDropdownItem  onClick={handleLanguages} data-language={LANGUAGE_SET.ru.key} className="text-white">{LANGUAGE_SET.ru.label}</CDropdownItem>*/ }
      {/*        <CDropdownItem onClick={handleLanguages} data-language={LANGUAGE_SET.ukr.key} className="text-white">{LANGUAGE_SET.ukr.label}</CDropdownItem>*/ }
      {/*      </CDropdownMenu>*/ }
      {/*    </CDropdown>*/ }
      {/*  </CCol>*/ }
      {/*</div>*/ }
      <CSidebarNav>
        <SimpleBar>
          {/*{ nav.map(navItem => {*/}
          {/*  return (*/}
          {/*      <li className="nav-item" key={navItem.anchor} onClick={ (event) => {*/}
          {/*        // event.stopPropagation()*/}
          {/*        console.log(navItem.to)*/}
          {/*        // window.open(navItem.to)*/}
          {/*        // window.scrollTo(0, 0)*/}
          {/*      } }>*/}
          {/*        <span className="nav-link">{ navItem.icon } { navItem.anchor }</span>*/}
          {/*      </li>*/}
          {/*  )*/}
          {/*}) }*/}
          <CCreateNavItem items={nav}/>
        </SimpleBar>
      </CSidebarNav>
      <div className="px-3 ">
        { isBusinessUserType && <ExchangeDropdown title={t('dashboard.title.currencies')} {...rest} /> }
        { isBusinessUserType && <RatesDropdown title={t('dashboard.title.dailyRates')}/> }
        {/*<ExchangeDropdown title="Депозиты" />*/ }
      </div>
      {/*<CSidebarToggler*/ }
      {/*  className="d-none d-md-flex"*/ }
      {/*  onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}*/ }
      {/*/>*/ }
    </CSidebar>
  )
}

const mapStateToProps = ({ user, isBusinessUserType, isBankUserType }) => ({
  user,
  isBusinessUserType,
  isBankUserType
})

export default (connect(mapStateToProps, null)(React.memo(AppSidebar)))
