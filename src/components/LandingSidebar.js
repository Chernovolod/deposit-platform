import React, { useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem,
  CSidebarToggler,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCol, CButton, CHeaderToggler, CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import 'simplebar/dist/simplebar.min.css'
import logo from '../assets/icons/svg/logo.svg'

const AppSidebar = ({ user: { company, type }, isBusinessUserType, setVisible, isBankUserType, isBusinessFunctionality, setBusinessFunctionality }) => {
  const { t } = useTranslation()
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
      id="sidebar_landing"
      className="sidebar_landing"
      hidden={ document.body.offsetWidth > 780 }
      position="fixed"
      selfHiding="md"
      unfoldable={ unfoldable }
      show={ sidebarShow && document.body.offsetWidth < 780 }
      // onShow={}
      onHide={ () => {
        dispatch({ type: 'set', sidebarShow: false })
      } }
    >
      <div className="container h-100 d-flex flex-column pb-3 justify-content-between">
        <header>
          <CSidebarBrand className="d-flex justify-content-between align-items-center py-3 mb-2" to="/">
            { !sidebarShow && <img src={ logo } alt="Deposit Platform" className="logo"/> }
            { sidebarShow &&
            <nav className="header_nav">
              <ul className="d-flex">
                <li><a className={ isBusinessFunctionality ? "primary-color" : "secondary-color" } role="button"
                       onClick={ () => {
                         setBusinessFunctionality(true)
                         setTimeout(() => dispatch({ type: 'set', sidebarShow: false }), 200)
                       } }><>{t('business')}</></a></li>
                <li><a className={ !isBusinessFunctionality ? "primary-color" : "secondary-color" } role="button"
                       onClick={ () => {
                         setBusinessFunctionality(false)
                         setTimeout(() => dispatch({ type: 'set', sidebarShow: false }), 200)
                       } }><>{t('bank')}</></a></li>
              </ul>
            </nav>
            }
            <CHeaderToggler
              // className="ms-md-3"
              onClick={ (event) => {
                dispatch({ type: 'set', sidebarShow: !sidebarShow })
              } }
            >
              <CIcon style={ { pointerEvents: 'none' } } name="cross_dark" size="lg"/>
            </CHeaderToggler>
          </CSidebarBrand>
          <hr/>
          <ul>
            <li><a className="secondary-color" onClick={ () => setVisible(true) } role="button">{t('help')}</a></li>
          </ul>
          <CCol className="d-flex flex-column mt-5">
            <a className="text-high-emphasis" href="tel:+375297712905">+ 375-29-771-29-05</a>
            <a className="text-high-emphasis" href="mailto:info@depl.by">info@depl.by</a>
            <CRow className="d-flex flex-row mt-3">
              <svg className="col-2 ms-0 ps-0" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.55025 12.5139C7.55025 11.6545 8.56025 11.2811 9.49027 10.6896C9.62297 10.6054 9.72627 10.5476 9.86615 10.4637L19.1466 4.69823C19.3345 4.58001 19.3467 4.54169 19.6003 4.60134C19.6003 5.00082 19.4662 4.9202 19.2366 5.14217L18.0853 6.24949C17.9652 6.35072 17.9293 6.36048 17.8116 6.47761C17.6556 6.63306 17.524 6.78816 17.3622 6.93168L15.4376 8.72155C15.2547 8.90737 15.112 8.99666 14.9369 9.17417C14.2361 9.88419 13.2308 10.7366 12.5629 11.4177C12.3811 11.6032 12.2409 11.6885 12.0622 11.8707C11.7459 12.1932 11.4543 12.4311 11.138 12.7535L10.1868 13.6595C9.82311 14.0232 9.71981 14.3243 9.62835 14.9613C9.54837 15.5181 9.46157 16.0737 9.40419 16.6001C9.37621 16.856 9.37513 17.2107 9.20046 17.3087C8.91927 17.4663 8.81024 17.133 8.74281 16.9056C8.60293 16.4313 8.47704 15.9421 8.33931 15.4479C8.2145 15 7.55025 12.8136 7.55025 12.5139ZM0 9.79236C0 10.2518 0.0387358 10.4022 0.584265 10.6144L4.99261 12.2695C5.26663 12.3725 5.56396 12.4911 5.86955 12.5948C6.27735 12.7333 6.16724 12.6762 6.38172 13.3385L8.39239 19.8794C8.52689 20.2626 8.69547 20.4264 9.14989 20.4264C9.40777 20.4264 9.69112 20.1307 9.86579 19.9886L11.7656 18.4261C12.0755 18.1749 12.7595 17.5361 13.1035 17.4525C13.6823 17.3115 14.3154 17.9066 14.9362 18.3737C15.0653 18.4709 15.1446 18.5382 15.2798 18.6322L19.2786 21.5568C19.7118 21.8869 20.1537 22.2329 20.5981 21.7347C20.819 21.4871 21.0213 20.195 21.1042 19.7753C21.8122 16.1995 22.6282 12.5157 23.3372 8.92255L23.9 6.21407C23.9864 5.85002 25 1.15391 25 0.619954C25 0.291336 24.7184 0.0151367 24.3002 0.0151367C23.9441 0.0151367 17.3895 2.62673 16.6072 2.94559L1.27147 8.90664C0.723068 9.12861 0 9.26382 0 9.79236H0Z" fill="#C9C9C9"/>
              </svg>
              <svg className="col-2 ps-0 text-start" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.04132 2.05378C6.75489 2.00035 7.62877 2.03482 8.36131 2.03827L15.4506 2.03654C17.1776 2.04344 18.1429 2.05723 19.2856 2.94317C21.1988 4.42376 20.9541 6.25769 20.9541 8.35017V15.4377C20.9575 17.1906 20.9369 18.1059 20.0457 19.2728C19.439 20.0673 18.41 20.7964 17.0001 20.9223C16.0866 21.0033 8.72155 20.9378 7.55293 20.9412C5.86034 20.9481 4.81754 20.8999 3.7196 20.0346C2.92501 19.4106 2.18902 18.4265 2.06837 16.9838C2.00632 16.2478 2.04941 13.2263 2.04941 12.2524C2.04768 10.6822 2.05113 9.11201 2.05113 7.54179C2.04941 5.84058 2.07009 4.82019 2.95603 3.70673C3.59894 2.90353 4.57451 2.16582 6.04132 2.05378ZM16.8157 0.00439453H6.1499C5.64661 0.173309 4.30563 -0.0645503 2.45274 1.36433C1.553 2.05723 0.86528 2.95006 0.355088 4.33585C-0.122355 5.63202 0.022429 7.58833 0.0155345 9.06719C0.00691636 10.7563 0.0207053 12.4472 0.0172581 14.1364C0.0120872 17.213 -0.182682 19.6037 2.58201 21.7117C3.57481 22.4683 4.77273 22.9286 6.38604 22.9751C8.06312 23.0216 9.81605 22.9768 11.5017 22.9768C13.1823 22.9768 14.8973 23.0078 16.5744 22.9751C18.6668 22.9337 20.5904 21.9961 21.6625 20.4845C23.2069 18.3058 22.9914 16.9476 22.9862 14.1364C22.9828 12.4472 22.9966 10.7563 22.988 9.06719C22.9759 6.86268 23.2086 4.42721 21.7987 2.67256L21.2402 1.97622C20.5439 1.15233 19.1012 0.393933 17.955 0.147455C17.6809 0.088852 16.9708 0.0561032 16.8157 0.00439453V0.00439453Z" fill="#C9C9C9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8864 7.66415C13.1754 7.29185 15.0231 8.9448 15.3299 10.8442C15.7057 13.1539 14.0441 15.0223 12.1481 15.3188C9.84362 15.679 7.97866 14.0605 7.67358 12.1352C7.29955 9.76869 8.95767 7.97957 10.8864 7.66415ZM5.59317 11.625C5.65349 12.6023 5.79655 13.228 6.15507 14.0105C7.64772 17.2561 11.9413 18.5006 14.9507 16.284C16.371 15.2377 17.5017 13.5124 17.412 11.3699C17.3724 10.4237 17.1931 9.71354 16.8484 8.96893C15.9418 7.00573 13.77 5.49411 11.3776 5.58202C10.5072 5.61477 9.67125 5.80609 8.98353 6.14564C7.02377 7.11604 5.44149 9.20679 5.59317 11.625Z" fill="#C9C9C9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.1917 5.47854C16.2538 6.24383 16.9415 6.88157 17.7826 6.81779C19.7475 6.66784 19.5011 3.66357 17.5137 3.86006C16.7467 3.9359 16.1228 4.61328 16.1917 5.47854Z" fill="#C9C9C9"/>
              </svg>
            </CRow>
          </CCol>
        </header>
        <CCol className="d-flex flex-column justify-content-end">
          <CButton
            className="btn-lg w-100 mt-4 d-md-none"
            color="primary"
            variant="outline"
            block="true"
            onClick={ () => window.open('/register', '_self') }
          >
            {t('landing.sidebar.primaryButton.register')}
          </CButton>
          <CButton
            className="text-white btn-lg w-100 mt-3 d-md-none"
            color="primary"
            block="true"
            onClick={ () => window.open('/login', '_self') }
          >
            { t('logIn') }
          </CButton>
        </CCol>

      </div>
    </CSidebar>
  )
}

const mapStateToProps = ({ user, isBusinessUserType, isBankUserType }) => ({
  user,
  isBusinessUserType,
  isBankUserType
})

export default (connect(mapStateToProps, null)(React.memo(AppSidebar)))
