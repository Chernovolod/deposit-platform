import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionCollapse,
  CAccordionItem,
  CButton,
  CHeaderToggler,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CModal,
  CModalContent,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormFloating,
  CFormControl,
  CFormLabel, CModalFooter
} from '@coreui/react'
import { LandingSidebar } from 'src/components/index'

import logo from 'src/assets/icons/svg/logo.svg'

import clients from 'src/assets/images/clients.png'
import companies from 'src/assets/images/companies.png'
import handPhone from 'src/assets/images/hand-phone.png'
import computer from 'src/assets/images/computer.png'
import search from 'src/assets/images/search.png'
import lines from 'src/assets/images/lines.png'
import graph from 'src/assets/images/graph.png'
import box from 'src/assets/images/box.png'

import done from 'src/assets/icons/png/done.png'
import secure from 'src/assets/icons/png/secure.png'
import bank from 'src/assets/icons/png/bank.png'
import request from 'src/assets/icons/png/request.png'
import plus from 'src/assets/icons/png/plus.png'
import fingerprint from 'src/assets/icons/png/fingerprint.png'
import qrCode from 'src/assets/icons/png/qrCode.png'
import card from 'src/assets/icons/png/card.png'
import bag from 'src/assets/icons/png/bag.png'

import alfa from 'src/assets/images/banks/alfa.png'
import belarus from 'src/assets/images/banks/belarus.png'
import bWeb from 'src/assets/images/banks/bweb.png'
import mtb from 'src/assets/images/banks/mtb.png'
import prior from 'src/assets/images/banks/prior.png'

import priorMini from 'src/assets/images/banks/mini/prior.png'
import alfaMini from 'src/assets/images/banks/mini/alfa.png'
import mtbMini from 'src/assets/images/banks/mini/mtb.png'

import './config.css'
import './lib.css'
import './style.css'

import Glide from '@glidejs/glide'
import CIcon from '@coreui/icons-react'
import RegularLoader from '../../components/loaders/regular'

const QA_SECTION = {
  bank: [{
    number: 1,
    title: 'landing.bank.QASection.1.title',
    answer: 'landing.bank.QASection.1.answer'
  }, {
    number: 2,
    title: 'landing.bank.QASection.2.title',
    answer: 'landing.bank.QASection.2.answer'
  }],
  business: [{
    number: 1,
    title: 'landing.business.QASection.1.title',
    answer: 'landing.business.QASection.1.answer'
  }, {
    number: 2,
    title: 'landing.business.QASection.2.title',
    answer: 'landing.business.QASection.2.answer'
  }, {
    number: 3,
    title: 'landing.business.QASection.3.title',
    answer: 'landing.business.QASection.3.answer'
  }, {
    number: 4,
    title: 'landing.business.QASection.4.title',
    answer: 'landing.business.QASection.4.answer'
  }, {
    number: 5,
    title: 'landing.business.QASection.5.title',
    answer: 'landing.business.QASection.5.answer'
  }]
}

const LandingProcessItem = ({ text, number }) => (
  <CCol xs={ 12} className="p-3 d-flex align-items-center me-5 rounded-3"
    style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
    <CCol xs={ 3 }>
      <span style={{ width: '3rem', height: '3rem' }}
        className="pt-1 rounded-circle d-flex justify-content-center align-items-center bg-primary text-white">
        {number}
      </span>
    </CCol>
    <CCol xs={ 9 } className="ps-2">
      {text}
    </CCol>
  </CCol>
)

const LandingCard = ({ title, description, image }) => (
  <CCol className="d-flex" style={{ minHeight: '100%' }} md={ 4 }>
    <CCard style={{ backgroundColor: '#E0E4E7' }}>
      <CCardBody className={`p-4 pb-2`}>
        <h4 className="mb-3">{title}</h4>
        <CCardText className="font-size-md">
          {description}
        </CCardText>
      </CCardBody>
      <CCardImage className={image && 'py-0 px-4 mx-auto mx-md-0 mb-md-0 mb-4'} orientation="bottom"
        src={image || handPhone} />
    </CCard>
  </CCol>
)

const LandingView = ({
  onSubmit,
  valid,
  visible,
  setVisible,
  onChange,
  isLoading,
  formData,
  setBusinessFunctionality, isBusinessFunctionality, history, ...rest
}) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const { t } = useTranslation()
  const [activeKey, setActiveKey] = useState(0)
  const [mobileBusinessSlider] = useState(new Glide('.glide-business-small', {
    type: 'carousel',
    perView: 1.1,
    gap: 10,
    slideWidth: 350,
    focusAt: 0,
    startAt: 0,
    dragThreshold: 40,
  }))
  const [mobileBankSlider] = useState(new Glide('.glide-bank-mobile', {
    type: 'carousel',
    perView: 1.1,
    gap: 10,
    slideWidth: 350,
    focusAt: 0,
    startAt: 0,
    dragThreshold: 40,
  }))
  const [bankProfitSlider] = useState(new Glide('.glide-bank-small', {
    type: 'carousel',
    perView: 1.1,
    gap: 10,
    slideWidth: 350,
    focusAt: 0,
    startAt: 0,
    dragThreshold: 40,
  }))
  const [mobileCardsSlider] = useState(new Glide('.glide-card-mobile', {
    type: 'carousel',
    perView: 1.07,
    gap: 10,
    slideWidth: 350,
    focusAt: 0,
    startAt: 0,
    dragThreshold: 40,
  }))
  const [slider] = useState(new Glide('.glide', {
    type: 'carousel',
    perView: 5.32,
    gap: 60,
    slideWidth: 250,
    focusAt: 'center',
    breakpoints: {
      620: {
        startAt: 1,
        perView: 1.4,
        slideWidth: 300,
        dragThreshold: 20,
        gap: 40,
        focusAt: 'center',
      }
    }
  }))
  const [mobilePartnersSlider] = useState(new Glide('.glide-partners-mobile', {
    type: 'carousel',
    perView: 3.3,
    gap: 0,
    // slideWidth: 80,
    focusAt: 0,
    startAt: 0,
    dragThreshold: 40,
  }))

  useEffect(() => {
    if (isBusinessFunctionality) slider.mount()
    if (isBusinessFunctionality) mobileBusinessSlider.mount()
    if (isBusinessFunctionality) mobileCardsSlider.mount()
    if (isBusinessFunctionality) mobilePartnersSlider.mount()
    setActiveKey(0)
    // return () => slider.destroy()
  }, [isBusinessFunctionality])

  useEffect(() => {
    if (!isBusinessFunctionality) bankProfitSlider.mount()
    if (!isBusinessFunctionality) mobileBankSlider.mount()

    // return () => mobileBankSlider.destroy()
  }, [!isBusinessFunctionality])

  const renderEditModal = () => (
    <CModal alignment="center" visible={visible} onDismiss={() => setVisible(false)}>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle component="h2">{t('help')}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormFloating>
            <CFormControl
              autoComplete="off"
              type="text"
              name="name"
              id="name"
              placeholder={t('faq.modal.input.name')}
              onChange={onChange}
            />
            <CFormLabel htmlFor="name">{t('faq.modal.input.name')}</CFormLabel>
          </CFormFloating>
          <CRow className="mb-4">
            <CCol className="mt-4" xl={ 6 }>
              <CFormFloating>
                <CFormControl
                  valid={!!formData.email && valid}
                  invalid={!!formData.email && !valid}
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder={t('email')}
                  onChange={onChange}
                />
                <CFormLabel htmlFor="email">{t('email')}</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol className="mt-4" xl={ 6 }>
              <CFormFloating>
                <CFormControl
                  autoComplete="off"
                  type="phone"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  placeholder={t('phoneNumber')}
                  onChange={onChange}
                />
                <CFormLabel htmlFor="phone">{t('phoneNumber')}</CFormLabel>
              </CFormFloating>
            </CCol>
          </CRow>
          <CFormControl
            component="textarea"
            rows="3"
            resize="none"
            autoComplete="off"
            name="message"
            id="message"
            placeholder={t('faq.modal.input.question')}
            onChange={onChange}
          />
        </CModalBody>
        <CModalFooter className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-start w-100">
            <a target="_blank" className="text-high-emphasis" href="">
              <div className="d-flex flex-column me-3 px-2 px-md-3 py-2"
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px', fontSize: '12px' }}>
                <svg width="37" height="37" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.1744 18.2019C11.1744 16.952 12.6692 16.4088 14.0456 15.5485C14.242 15.426 14.3949 15.3419 14.6019 15.2199L28.337 6.83374C28.6151 6.66179 28.6332 6.60605 29.0084 6.69281C29.0084 7.27387 28.8099 7.15661 28.4702 7.47947L26.7662 9.09013C26.5884 9.23737 26.5353 9.25156 26.3612 9.42194C26.1303 9.64805 25.9355 9.87364 25.6961 10.0824L22.8477 12.6858C22.577 12.9561 22.3657 13.086 22.1067 13.3442C21.0695 14.377 19.5816 15.6169 18.5932 16.6076C18.324 16.8773 18.1165 17.0014 17.8521 17.2665C17.3839 17.7355 16.9524 18.0815 16.4842 18.5506L15.0765 19.8683C14.5382 20.3973 14.3853 20.8354 14.25 21.7619C14.1316 22.5717 14.0031 23.3799 13.9182 24.1455C13.8768 24.5178 13.8752 25.0337 13.6167 25.1762C13.2005 25.4054 13.0392 24.9206 12.9394 24.5899C12.7323 23.9 12.546 23.1885 12.3422 22.4697C12.1575 21.8182 11.1744 18.6379 11.1744 18.2019ZM0 14.2434C0 14.9117 0.057329 15.1305 0.864712 15.4392L7.38906 17.8465C7.79461 17.9963 8.23467 18.1688 8.68693 18.3197C9.29047 18.5211 9.12751 18.438 9.44494 19.4014L12.4207 28.9154C12.6198 29.4728 12.8693 29.7111 13.5418 29.7111C13.9235 29.7111 14.3429 29.2809 14.6014 29.0743L17.4131 26.8016C17.8718 26.4361 18.8841 25.5069 19.3931 25.3855C20.2499 25.1804 21.1868 26.0459 22.1056 26.7253C22.2967 26.8668 22.414 26.9646 22.6141 27.1013L28.5323 31.3554C29.1735 31.8355 29.8275 32.3387 30.4852 31.6141C30.8122 31.2539 31.1116 29.3745 31.2342 28.764C32.282 23.5629 33.4897 18.2046 34.5391 12.9782L35.372 9.0386C35.4999 8.50907 37 1.67838 37 0.901707C37 0.423716 36.5833 0.0219727 35.9644 0.0219727C35.4373 0.0219727 25.7365 3.82066 24.5787 4.28445L1.88177 12.9551C1.07014 13.2779 0 13.4746 0 14.2434H0Z"
                    fill="#C9C9C9" />
                </svg>
                <div className="mt-2">{t('landing.helpModal.linkLabel')}<br />Telegram</div>
              </div>
            </a>
            <a target="_blank" className="text-high-emphasis" href="">
              <div className="d-flex flex-column me-3 px-2 px-md-3 py-2"
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px', fontSize: '12px' }}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M9.71861 3.30367C10.8665 3.21772 12.2723 3.27317 13.4508 3.27872L24.8552 3.27595C27.6336 3.28704 29.1863 3.30922 31.0247 4.73443C34.1025 7.11625 33.7087 10.0665 33.7087 13.4326V24.8343C33.7143 27.6542 33.681 29.1266 32.2475 31.0038C31.2715 32.282 29.6161 33.4549 27.348 33.6573C25.8784 33.7876 14.0303 33.6823 12.1503 33.6878C9.42747 33.6989 7.74994 33.6213 5.98368 32.2293C4.70542 31.2256 3.52144 29.6423 3.32735 27.3215C3.22753 26.1375 3.29685 21.2768 3.29685 19.7102C3.29408 17.1842 3.29962 14.6582 3.29962 12.1322C3.29685 9.39548 3.33012 7.75399 4.75533 5.96277C5.78958 4.67065 7.35897 3.4839 9.71861 3.30367ZM27.0513 0.00683594H9.8933C9.08365 0.278569 6.92642 -0.104075 3.94568 2.19456C2.49829 3.30922 1.39195 4.74552 0.571203 6.97484C-0.196858 9.05997 0.0360561 12.2071 0.024965 14.5861C0.0111011 17.3034 0.0332834 20.0235 0.0277378 22.7409C0.0194195 27.6903 -0.293905 31.5361 4.15364 34.9272C5.75076 36.1445 7.67785 36.8848 10.2732 36.9597C12.9711 37.0346 15.791 36.9625 18.5028 36.9625C21.2063 36.9625 23.9652 37.0124 26.6631 36.9597C30.0292 36.8932 33.1237 35.3848 34.8483 32.953C37.3328 29.4482 36.9862 27.2633 36.9778 22.7409C36.9723 20.0235 36.9945 17.3034 36.9806 14.5861C36.9612 11.0397 37.3355 7.12179 35.0674 4.2991L34.169 3.1789C33.0488 1.85351 30.728 0.633485 28.8841 0.236977C28.4432 0.142702 27.3008 0.0900194 27.0513 0.00683594V0.00683594Z"
                    fill="#C9C9C9" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M17.5129 12.329C21.1951 11.7301 24.1675 14.3892 24.6611 17.4448C25.2656 21.1603 22.5926 24.166 19.5425 24.6429C15.8353 25.2225 12.8352 22.6188 12.3444 19.5216C11.7427 15.7146 14.4101 12.8364 17.5129 12.329ZM8.99764 18.7009C9.09469 20.273 9.32483 21.2796 9.90157 22.5384C12.3028 27.7595 19.2098 29.7615 24.0511 26.1957C26.3358 24.5126 28.1548 21.7371 28.0106 18.2905C27.9468 16.7682 27.6585 15.6259 27.1039 14.428C25.6454 11.2698 22.1517 8.83809 18.3031 8.9795C16.9028 9.03218 15.558 9.33996 14.4517 9.8862C11.299 11.4473 8.75364 14.8107 8.99764 18.7009Z"
                    fill="#C9C9C9" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M26.0475 8.81331C26.1473 10.0444 27.2537 11.0704 28.6068 10.9678C31.7678 10.7265 31.3713 5.89358 28.1742 6.20967C26.9404 6.33168 25.9366 7.42138 26.0475 8.81331Z"
                    fill="#C9C9C9" />
                </svg>
                <div className="mt-2">{t('landing.helpModal.linkLabel')} <br />Instagram</div>
              </div>
            </a>
            <a target="_blank" className="text-high-emphasis" href="mailto:info@depl.by">
              <div className="d-flex flex-column me-3 px-2 px-md-3 py-2"
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px', fontSize: '12px' }}>
                <svg width="35" height="37" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.152 0.623998C21.544 0.623998 24.552 1.456 27.176 3.12C29.736 4.72 31.672 6.752 32.984 9.216C34.296 11.648 34.952 14.256 34.952 17.04C34.952 20.304 34.264 22.848 32.888 24.672C31.512 26.464 29.736 27.36 27.56 27.36C24.36 27.36 22.36 26.048 21.56 23.424C20.376 24.992 18.728 25.776 16.616 25.776C14.504 25.776 12.76 25.04 11.384 23.568C10.008 22.096 9.32 20.24 9.32 18C9.32 15.76 10.008 13.904 11.384 12.432C12.792 10.928 14.536 10.176 16.616 10.176C18.504 10.176 20.04 10.816 21.224 12.096V10.656H25.64V21.504C25.64 24.096 26.616 25.392 28.568 25.392C29.976 25.392 31.112 24.672 31.976 23.232C32.84 21.792 33.272 19.728 33.272 17.04C33.272 12.784 31.816 9.248 28.904 6.432C25.992 3.584 22.408 2.16 18.152 2.16C13.8 2.16 10.072 3.68 6.968 6.72C3.896 9.76 2.36 13.52 2.36 18C2.36 22.544 3.928 26.336 7.064 29.376C10.232 32.352 14.216 33.84 19.016 33.84C22.024 33.84 24.696 33.424 27.032 32.592V34.224C24.664 34.992 21.992 35.376 19.016 35.376C13.768 35.376 9.4 33.728 5.912 30.432C2.424 27.168 0.68 23.024 0.68 18C0.68 13.2 2.344 9.104 5.672 5.712C9.032 2.32 13.192 0.623998 18.152 0.623998ZM17.528 21.744C18.584 21.744 19.464 21.408 20.168 20.736C20.872 20.032 21.224 19.12 21.224 18C21.224 16.88 20.872 15.968 20.168 15.264C19.464 14.56 18.584 14.208 17.528 14.208C16.44 14.208 15.544 14.56 14.84 15.264C14.136 15.968 13.784 16.88 13.784 18C13.784 19.12 14.136 20.032 14.84 20.736C15.544 21.408 16.44 21.744 17.528 21.744Z"
                    fill="#C9C9C9" />
                </svg>
                <div className="mt-2">{t('landing.helpModal.ourPost')} <br />info@depl.by</div>
              </div>
            </a>
          </div>
          <CRow className="w-100 m-0 mt-3 d-flex justify-content-center">
            <CCol md={ 6 } xs={ 12 } className="ps-md-0 mb-3 mb-md-0 px-0 pe-md-2">
              <CButton onClick={onSubmit}
                disabled={isLoading || !valid}
                className="text-white w-100"
                size="sm"
                color="primary">
                {isLoading ? <RegularLoader classes="text-white" /> : t('faq.modal.primaryButton')}
              </CButton>
            </CCol>
            <CCol md={ 6 } xs={ 12 } className="pe-md-0 px-0 ps-md-2">
              <CButton onClick={onSubmit}
                variant="outline"
                disabled={isLoading}
                className="w-100"
                size="sm"
                color="primary">
                {isLoading ? <RegularLoader classes="text-white" /> : t('landing.helpModal.secondaryButton')}
              </CButton>
            </CCol>
          </CRow>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
  return (
    <div className="landing">
      {renderEditModal()}
      <header className="position-fixed bg-white w-100">
        <div className="container">
          <div className="d-md-flex justify-between align-center d-none">
            <div className="d-flex align-center">
              <img src={logo} alt="Deposit Platform" className="logo" />
              <svg className="vertical-separator" width="1" height="45" viewBox="0 0 1 45" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="45" fill="#EFEFEF" />
              </svg>
              <nav className="header_nav">
                <ul className="d-flex">
                  <li><a
                    className={isBusinessFunctionality ? "primary-color header_a-button" : "secondary-color header_a-button"}
                    role="button"
                    onClick={() => setBusinessFunctionality(true)}>{t('business')}</a></li>
                  <li><a
                    className={!isBusinessFunctionality ? "primary-color header_a-button" : "secondary-color header_a-button"}
                    role="button"
                    onClick={() => setBusinessFunctionality(false)}>{t('bank')}</a></li>
                </ul>
              </nav>
            </div>
            <div className="d-flex align-center">
              <nav className="header_nav">
                <ul className="d-flex">
                  <li><a className=" header_a-button" onClick={() => setVisible(true)} role="button">{t('help')}</a></li>
                </ul>
              </nav>
              <CButton
                className="text-white px-4"
                color="primary"
                block="true"
                onClick={() => {
                  if (isBusinessFunctionality) window.open('/login', '_self')
                  if (!isBusinessFunctionality) window.open('/bank/login', '_self')
                }}
              >
                {t('logIn')}
              </CButton>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between d-md-none">
            <img src={logo} alt="Deposit Platform" className="logo" />
            <div className="d-flex">
              <CButton
                className="text-white px-4 me-2"
                color="primary"
                block="true"
                onClick={() => {
                  if (isBusinessFunctionality) window.open('/login', '_self')
                  if (!isBusinessFunctionality) window.open('/bank/login', '_self')
                }}
              >
                {t('logIn')}
              </CButton>
              <CHeaderToggler
                onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
              >
                <CIcon className="text-white" name="menu_dark" size="lg" />
              </CHeaderToggler>
            </div>
          </div>
        </div>
      </header>
      <LandingSidebar
        setVisible={setVisible}
        isBusinessFunctionality={isBusinessFunctionality}
        setBusinessFunctionality={setBusinessFunctionality}
      />
      <main>
        <section className="pt-5">
          <div className="container pt-5 d-flex flex-column flex-md-row">
            <div className="d-flex flex-1 flex-column justify-center align-start">
              <h2 className="text-start mb-4 mt-4 mt-md-0">
                {isBusinessFunctionality
                  ? t('landing.business.hero.title')
                  : t('landing.bank.hero.title')
                }
              </h2>
              <p className="m-0 p-0 text-start">
                {isBusinessFunctionality
                  ? t('landing.business.hero.description')
                  : t('landing.bank.hero.description')
                }
              </p>
              <CButton
                size="sm"
                className="text-white btn-lg mt-4 py-2 d-none d-md-block"
                color="primary"
                block="true"
                onClick={() => {
                  if (isBusinessFunctionality) window.open('/register', '_self')
                  if (!isBusinessFunctionality) window.open('/bank/register', '_self')
                }}
              >
                {isBusinessFunctionality ? t('landing.business.hero.button') : t('landing.bank.hero.button')}
              </CButton>
            </div>
            <img className="flex-1 col-12 d-md-none p-xs-0" src={ clients }
                 alt="Находите клиентов уже сегодня"/>
            <img className="flex-1 col-12 d-none d-md-block p-xs-0 w-auto" height={ 440 } src={ clients }
                 alt="Находите клиентов уже сегодня"/>
            <CButton
              size="sm"
              className="text-white btn-lg py-2 w-100 mt-4 d-md-none"
              color="primary"
              block="true"
              onClick={() => {
                if (isBusinessFunctionality) window.open('/register', '_self')
                if (!isBusinessFunctionality) window.open('/bank/register', '_self')
              }}
            >
              {t('landing.register')}
            </CButton>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mb-5 text-start mx-auto mx-md-0 col-12 col-md-6">{
              isBusinessFunctionality
                ? t('landing.business.section.1.title')
                : t('landing.bank.section.1.title')
            }</h2>
            <CRow className={!isBusinessFunctionality ? 'flex-row-reverse' : ''}>
              <LandingCard
                title={isBusinessFunctionality
                  ? t('landing.business.section.1.card.1.title')
                  : t('landing.bank.section.1.card.1.title')
                }
                description={isBusinessFunctionality
                  ? t('landing.business.section.1.card.1.description')
                  : t('landing.bank.section.1.card.1.description')
                }
                image={isBusinessFunctionality ? null : graph}
              />
              {isBusinessFunctionality
                ? (<div className="glide-business-small my-3 d-md-none">
                  <div className="glide__track" data-glide-el="track" style={{ marginRight: '-8px' }}>
                    <ul className="glide__slides">
                      <li className="glide_slide">
                        <CCol
                          className="p-4 pb-5 d-flex flex-column d-md-block h-100 rounded-3 position-relative overflow-hidden"
                          xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>
                            {t('landing.business.section.1.card.2.title')}
                          </h5>
                          <span className="d-block font-size-md mt-3">
                          {t('landing.business.section.1.card.2.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            2
                          </span>
                        </CCol>
                      </li>
                      <li className="glide_slide">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.business.section.1.card.3.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.business.section.1.card.3.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            3
                          </span>
                        </CCol>
                      </li>
                      <li className="glide_slide">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.business.section.1.card.4.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.business.section.1.card.4.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            4
                          </span>
                        </CCol>
                      </li>
                      <li className="glide_slide">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.business.section.1.card.5.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.business.section.1.card.5.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            5
                          </span>
                        </CCol>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__bullets position-relative" style={{ top: '15px' }}
                    data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                    <button className="glide__bullet" data-glide-dir="=3"></button>
                  </div>
                </div>)
                : (
                  <div key={'glide-bank-mobile'} className="glide-bank-mobile trackk my-3 d-md-none">
                    <div className="glide__track" data-glide-el="track" style={{ marginRight: '-8px' }}>
                      <ul className="glide__slides">
                        <li className="glide_slide">
                          <CCol
                            className="p-4 pb-5 d-flex flex-column d-md-block h-100 rounded-3 position-relative overflow-hidden"
                            xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.1.card.2.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.1.card.2.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0"
                            >
                              2
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.1.card.3.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.1.card.3.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0"
                            >
                              3
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.1.card.4.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.1.card.4.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0"
                            >
                              4
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.1.card.5.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.1.card.5.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0"
                            >
                              5
                            </span>
                          </CCol>
                        </li>
                      </ul>
                    </div>
                    <div className="glide__bullets position-relative" style={{ top: '15px' }}
                      data-glide-el="controls[nav]">
                      <button className="glide__bullet" data-glide-dir="=0"></button>
                      <button className="glide__bullet" data-glide-dir="=1"></button>
                      <button className="glide__bullet" data-glide-dir="=2"></button>
                      <button className="glide__bullet" data-glide-dir="=3"></button>
                    </div>
                  </div>
                )}
              <CCol md={8} className="d-none d-md-flex flex-column justify-content-between">
                <CRow className="h-50 mb-3 m-0">
                  <CCol md={6} className="px-3">
                    <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                      style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                      <h5>
                        {isBusinessFunctionality
                          ? t('landing.business.section.1.card.2.title')
                          : t('landing.bank.section.1.card.2.title')}
                      </h5>
                      <span className="d-block font-size-md mt-3">
                        {isBusinessFunctionality
                          ? t('landing.business.section.1.card.2.description')
                          : t('landing.bank.section.1.card.2.description')}
                      </span>
                      <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                        className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                        {isBusinessFunctionality ? 2 : 1}
                      </span>
                    </CCol>
                  </CCol>
                  <CCol md={6} className="px-3">
                    <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                      style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                      <h5>
                        {
                          isBusinessFunctionality
                            ? t('landing.business.section.1.card.3.title')
                            : t('landing.bank.section.1.card.3.title')
                        }
                      </h5>
                      <span className="d-block font-size-md mt-3">
                        {isBusinessFunctionality
                          ? t('landing.business.section.1.card.3.description')
                          : t('landing.bank.section.1.card.3.description')
                        }
                      </span>
                      <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                        className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                        {isBusinessFunctionality ? 3 : 2}
                      </span>
                    </CCol>
                  </CCol>
                </CRow>
                <CRow className="h-50 m-0">
                  <CCol md={6} className="px-3">
                    <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                      style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                      <h5>{isBusinessFunctionality ? t('landing.business.section.1.card.4.title') : t('landing.bank.section.1.card.4.title')}</h5>
                      <span className="d-block font-size-md mt-3">
                        {isBusinessFunctionality
                          ? t('landing.business.section.1.card.4.description')
                          : t('landing.bank.section.1.card.4.description')}
                      </span>
                      <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                        className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                        {isBusinessFunctionality ? 4 : 3}
                      </span>
                    </CCol>
                  </CCol>
                  <CCol md={6} className="px-3">
                    <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                      style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                      <h5>{isBusinessFunctionality ? t('landing.business.section.1.card.5.title') : t('landing.bank.section.1.card.5.title')}</h5>
                      <span className="d-block font-size-md mt-3">
                        {
                          isBusinessFunctionality
                            ? t('landing.business.section.1.card.5.description')
                            : t('landing.bank.section.1.card.5.description')
                        }
                      </span>
                      <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                        className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                        {isBusinessFunctionality ? 5 : 4}
                      </span>
                    </CCol>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>
        </section>
        <section>
          <div className="container">
            <CCol md={8}>
              <h2 className="text-start mb-5">
                {
                  isBusinessFunctionality
                    ? t('landing.business.section.2.title')
                    : t('landing.bank.section.2.title')
                }
              </h2>
            </CCol>
            {isBusinessFunctionality ? (<div className="glide-card-mobile my-3 d-md-none">
              <div className="glide__track" data-glide-el="track" style={{ marginRight: '-8px' }}>
                <ul className="glide__slides">
                  <li className="glide_slide">
                    <LandingCard key={1} image={computer}
                      title={t('landing.business.section.2.card.1.title')}
                      description={t('landing.business.section.2.card.1.description')} />
                  </li>
                  <li className="glide_slide">
                    <LandingCard key={1} image={search}
                      title={t('landing.business.section.2.card.2.title')}
                      description={t('landing.business.section.2.card.2.description')}
                    />
                  </li>
                  <li className="glide_slide">
                    <LandingCard key={1} image={lines}
                      title={t('landing.business.section.2.card.3.title')}
                      description={t('landing.business.section.2.card.3.description')}
                    />
                  </li>
                </ul>
              </div>
              <div className="glide__bullets position-relative" style={{ top: '15px' }} data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
              </div>
            </div>)
              : (
                <CRow className="d-md-none">
                  <LandingCard
                    title={t('landing.bank.section.2.card.1.title')}
                    description={t('landing.bank.section.2.card.1.description')}
                    image={box}
                  />
                  <div className="glide-bank-small my-3 d-md-none">
                    <div className="glide__track" data-glide-el="track" style={{ marginRight: '-8px' }}>
                      <ul className="glide__slides">
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>
                              {t('landing.bank.section.2.card.2.title')}
                            </h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.2.card.2.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                              2
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.2.card.3.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.2.card.3.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                              3
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.2.card.4.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.2.card.4.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                              4
                            </span>
                          </CCol>
                        </li>
                        <li className="glide_slide">
                          <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                            <h5>{t('landing.bank.section.2.card.5.title')}</h5>
                            <span className="d-block font-size-md mt-3">
                              {t('landing.bank.section.2.card.5.description')}
                            </span>
                            <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                              className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                              5
                            </span>
                          </CCol>
                        </li>
                      </ul>
                    </div>
                    <div className="glide__bullets position-relative" style={{ top: '15px' }}
                      data-glide-el="controls[nav]">
                      <button className="glide__bullet" data-glide-dir="=0"></button>
                      <button className="glide__bullet" data-glide-dir="=1"></button>
                      <button className="glide__bullet" data-glide-dir="=2"></button>
                      <button className="glide__bullet" data-glide-dir="=3"></button>
                    </div>
                  </div>
                </CRow>
              )}
            <ul className="decorated-list d-none d-md-flex row p-0 mt-3">
              {isBusinessFunctionality ?
                [{
                  image: computer,
                  title: t('landing.business.section.2.card.1.title'),
                  description: t('landing.business.section.2.card.1.description')
                }, {
                  image: search,
                  title: t('landing.business.section.2.card.2.title'),
                  description: t('landing.business.section.2.card.2.description')
                }, {
                  image: lines,
                  title: t('landing.business.section.2.card.3.title'),
                  description: t('landing.business.section.2.card.3.description')
                }].map(el => (
                  <LandingCard key={el.title} image={el.image} title={el.title} description={el.description} />
                ))
                : <CRow>
                  <LandingCard
                    title={t('landing.bank.section.2.card.1.title')}
                    description={t('landing.bank.section.2.card.1.description')}
                    image={box}
                  />
                  <CCol md={8} className="d-flex flex-column justify-content-between">
                    <CRow className="h-50 mb-3 m-0">
                      <CCol md={6} className="px-3">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>
                          {t('landing.bank.section.2.card.2.title')}
                          </h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.bank.section.2.card.2.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            2
                          </span>
                        </CCol>
                      </CCol>
                      <CCol md={6} className="px-3">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.bank.section.2.card.3.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.bank.section.2.card.3.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            3
                          </span>
                        </CCol>
                      </CCol>
                    </CRow>
                    <CRow className="h-50 m-0">
                      <CCol md={6} className="px-3">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.bank.section.2.card.4.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.bank.section.2.card.4.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            4
                          </span>
                        </CCol>
                      </CCol>
                      <CCol md={6} className="px-3">
                        <CCol className="p-4 h-100 rounded-3 position-relative overflow-hidden" xs={ 12 }
                          style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
                          <h5>{t('landing.bank.section.2.card.5.title')}</h5>
                          <span className="d-block font-size-md mt-3">
                            {t('landing.bank.section.2.card.5.description')}
                          </span>
                          <span style={{ height: '3rem', width: '3rem', transform: 'translate(.4rem, .4rem)' }}
                            className="rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute text-white bottom-0 end-0">
                            5
                          </span>
                        </CCol>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              }
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <CRow
              className="br-1 mb-5 mt-3 flex-column flex-md-row bg-primary bg-gradient mx-0 p-3 px-md-4 py-md-4 d-flex align-items-center">
              <CCol xs={ 12 } md={ 9 }>
                {isBusinessFunctionality
                  ?
                  <h5 className="text-white text-start mt-0 mb-3 my-md-3">
                    {t('landing.business.section.3.title.part.1')} <br/> {t('landing.business.section.3.title.part.2')} </h5>
                  : <h4 className="text-white text-start my-3">{t('landing.business.section.3.subTitle')}</h4>
                }
              </CCol>
              <CCol xs={ 12 } md={ 3 }>
                <CButton
                  size="sm"
                  className="text-primary py-2 border-0 bg-white"
                  block="true"
                  onClick={() => {
                    if (isBusinessFunctionality) window.open('/register', '_self')
                    if (!isBusinessFunctionality) window.open('/bank/register', '_self')
                  }}
                >
                  {isBusinessFunctionality ? t('landing.register') : t('landing.bank.connectBank')}
                </CButton>
              </CCol>
            </CRow>
            <h2 className="text-start mb-3 mb-md-5">{t('landing.business.section.3.mainTitle')}</h2>
            <ul className="about_us d-flex flex-column flex-md-row justify-between flex-wrap">
              <li
                className={`text-start rounded-3 m-2 ms-md-0 px-2 py-3 px-md-4 pt-md-4 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="54" height="54" src={done} alt="Пользователи" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.1.title') : t('landing.bank.section.3.card.1.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.1.description') : t('landing.bank.section.3.card.1.description')}</p>
              </li>
              <li
                className={`text-start rounded-3 m-2 px-2 py-3 px-md-4 pt-md-4 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="57" height="54" src={isBusinessFunctionality ? fingerprint : qrCode}
                  alt="Финансы" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.2.title') : t('landing.bank.section.3.card.2.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.2.description') : t('landing.bank.section.3.card.2.description')}</p>
              </li>
              <li
                className={`text-start rounded-3 m-2 px-2 py-3 px-md-4 pt-md-4 me-md-0 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="54" height="54" src={isBusinessFunctionality ? secure : request}
                  alt="Поддержка" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.3.title') : t('landing.bank.section.3.card.3.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.3.description') : t('landing.bank.section.3.card.3.description')}</p>
              </li>
              <li
                className={`text-start rounded-3 m-2 px-2 py-3 px-md-4 pt-md-4 ms-md-0 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="55" height="54" src={isBusinessFunctionality ? bank : plus}
                  alt="Регистрация" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.4.title') : t('landing.bank.section.3.card.4.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.4.description') : t('landing.bank.section.3.card.4.description')}</p>
              </li>
              <li
                className={`text-start rounded-3 m-2 px-2 py-3 px-md-4 pt-md-4 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="49" height="54" src={isBusinessFunctionality ? request : bag}
                  alt="Комиссия" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.5.title') : t('landing.bank.section.3.card.5.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.5.description') : t('landing.bank.section.3.card.5.description')}</p>
              </li>
              <li
                className={`text-start rounded-3 m-2 px-2 py-3 px-md-4 pt-md-4 me-md-0 pb-md-5`}
                style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)', borderRadius: '10px' }}>
                <img className="mb-3" width="62" height="54" src={isBusinessFunctionality ? plus : card}
                  alt="Сервис" />
                <h4>{isBusinessFunctionality ? t('landing.business.section.3.card.6.title') : t('landing.bank.section.3.card.6.title')}</h4>
                <p
                  className="m-0">{isBusinessFunctionality ? t('landing.business.section.3.card.6.description') : t('landing.bank.section.3.card.6.description')}</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            {isBusinessFunctionality && <h2 className="text-start">
              {t('landing.business.section.4.title')}
            </h2>}
          </div>
          {isBusinessFunctionality && (
            <div className="container">
              <div className="d-block d-md-none glide-partners-mobile my-5">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide_slide">
                      <img style={{width: '100%'} } height={90} src={mtbMini} alt="MTБанк" />
                    </li>
                    <li className="glide_slide">
                      <img style={{width: '100%'}} height={90} src={alfaMini} alt="АльфаБанк" />
                    </li>
                    <li className="glide_slide">
                      <img style={{width: '100%'}} height={90} src={priorMini} alt="Приорбанк" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {isBusinessFunctionality && <div className="d-none d-md-block glide my-5">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide_slide">
                  <img src={mtb} alt="MTБанк" />
                </li>
                <li className="glide_slide">
                  <img src={alfa} alt="АльфаБанк" />
                </li>
                <li className="glide_slide">
                  <img src={prior} alt="Приорбанк" />
                </li>
                <li className="glide_slide">
                  <img src={bWeb} alt="АльфаБанк" />
                </li>
                <li className="glide_slide">
                  <img src={belarus} alt="Беларусбанк" />
                </li>
              </ul>
            </div>
          </div>}
          <div className="container">
          <div className="rounded-3 p-4 p-md-5 d-flex flex-column align-items-center flex-md-row "
            style={{ backgroundColor: 'rgba(232, 232, 232, 0.37)' }}>
            <div className="d-flex flex-1 flex-column justify-center align-start">
              <h2 className=" mb-3 mb-md-5 text-start  ">
                {isBusinessFunctionality
                  ? t('landing.business.section.5.title')
                  : t('landing.bank.section.5.title')
                }
              </h2>
              <p className="m0-p0 text-start">
                {isBusinessFunctionality
                  ? t('landing.business.section.5.description')
                  : t('landing.bank.section.5.description')
                }
              </p>
              <a
                role="button"
                key={uuidv4()}
                className="mt-4 py-2 d-none d-md-block with-right-arrow"
                color="primary"
                onClick={() => {
                  if (isBusinessFunctionality) window.open('/register', '_self')
                  if (!isBusinessFunctionality) window.open('/bank/register', '_self')
                }}
              >
                {isBusinessFunctionality ? t('landing.business.section.5.button') : t('landing.bank.section.5.button')}
              </a>
            </div>
            <img className="flex-1 w-100 mt-md-0 mt-3 p-xs-0" width="285" height="225" src={companies}
              alt="Находите клиентов уже сегодня" />
            <a
              role="button"
              className="mt-4 py-2 d-block d-md-none with-right-arrow"
              color="primary"
              onClick={() => {
                if (isBusinessFunctionality) window.open('/register', '_self')
                if (!isBusinessFunctionality) window.open('/bank/register', '_self')
              }}
            >
              {isBusinessFunctionality ? t('landing.business.section.5.button') : t('landing.bank.section.5.button')}
            </a>
          </div>
          </div>
        </section>
        {!isBusinessFunctionality &&
          <section>
            <div className="container">
              <h2 className="text-start mb-4">{t('landing.bank.section.6.title')}</h2>
              <CCol className="d-md-none">
                <CRow className="m-0 mb-4 position-relative">
                  <LandingProcessItem number={1} text={t("landing.bank.section.6.card.1")} />
                  <svg style={{ bottom: '-15px' }} className="position-absolute w-auto end-0 me-3" width="12"
                    height="30" viewBox="0 0 12 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L6 29M6 29L11 24M6 29L0.999999 24" stroke="#2F80ED" />
                  </svg>
                </CRow>
                <CRow className="m-0 mb-4 position-relative">
                  <LandingProcessItem number={2} text={t("landing.bank.section.6.card.2")} />
                  <svg style={{ bottom: '-15px' }} className="position-absolute w-auto end-0 me-3" width="12"
                    height="30" viewBox="0 0 12 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L6 29M6 29L11 24M6 29L0.999999 24" stroke="#2F80ED" />
                  </svg>
                </CRow>
                <CRow className="m-0 mb-4 position-relative">
                  <LandingProcessItem number={3} text={t("landing.bank.section.6.card.3")} />
                  <svg style={{ bottom: '-15px' }} className="position-absolute w-auto end-0 me-3" width="12"
                    height="30" viewBox="0 0 12 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L6 29M6 29L11 24M6 29L0.999999 24" stroke="#2F80ED" />
                  </svg>
                </CRow>
                <CRow className="m-0 mb-4 position-relative">
                  <LandingProcessItem number={4} text={t("landing.bank.section.6.card.4")} />
                  <svg style={{ bottom: '-15px' }} className="position-absolute w-auto end-0 me-3" width="12"
                    height="30" viewBox="0 0 12 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L6 29M6 29L11 24M6 29L0.999999 24" stroke="#2F80ED" />
                  </svg>
                </CRow>
                <CRow className="m-0 mb-4 position-relative">
                  <LandingProcessItem number={5} text={t("landing.bank.section.6.card.5 ")} />
                </CRow>
              </CCol>
              <CRow className="d-none d-md-flex justify-content-end mb-5 process">
                <CCol md={3} className="">
                  <LandingProcessItem number={1} text={t("landing.bank.section.6.card.1")} />
                </CCol>
                <CCol md={1} className="d-flex flex-column justify-content-around align-items-center">
                  <div className="pb-3">
                    <svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="#2F80ED" />
                    </svg>
                  </div>
                  <div className="pt-3">
                    <svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="#fff" />
                    </svg>
                  </div>
                </CCol>
                <CCol md={3} className="">
                  <div className="pb-3">
                    <LandingProcessItem number={2} text={t("landing.bank.section.6.card.2")} />
                  </div>
                  <div className="pt-3">
                    <LandingProcessItem number={5} text={t("landing.bank.section.6.card.5")} />
                  </div>
                </CCol>
                <CCol md={1} className="d-flex flex-column justify-content-around align-items-center">
                  <div className="pb-3">
                    <svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="#2F80ED" />
                    </svg>
                  </div>
                  <div className="pt-3">
                    <svg width="59" height="12" viewBox="0 0 59 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M59 6L1 5.99999M1 5.99999L6 11M1 5.99999L6 0.999995" stroke="#2F80ED" />
                    </svg>
                  </div>
                </CCol>
                <CCol md={3} className="">
                  <div className="pb-3">
                    <LandingProcessItem number={3} text={t("landing.bank.section.6.card.3")} />
                  </div>
                  <div className="pt-3">
                    <LandingProcessItem number={4} text={t("landing.bank.section.6.card.4")} />
                  </div>
                </CCol>
                <CCol md={1} className="d-flex flex-column justify-content-center align-items-center">
                  <div className="pt-3">
                    <svg width="63" height="148" viewBox="0 0 63 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_0_1" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M2 143H52.9998C58.5226 143 62.9998 138.523 62.9998 133V10C62.9998 4.47715 58.5226 0 52.9998 0H2V1H52.9998C57.9704 1 61.9998 5.02944 61.9998 10V133C61.9998 137.971 57.9704 142 52.9998 142H2V143Z" />
                      </mask>
                      <path
                        d="M2 143H1V144H2V143ZM2 0V-1H1V0H2ZM2 1H1V2H2V1ZM2 142V141H1V142H2ZM2 144H52.9998V142H2V144ZM52.9998 144C59.0749 144 63.9998 139.075 63.9998 133H61.9998C61.9998 137.971 57.9704 142 52.9998 142V144ZM63.9998 133V10H61.9998V133H63.9998ZM63.9998 10C63.9998 3.92487 59.0749 -1 52.9998 -1V1C57.9704 1 61.9998 5.02944 61.9998 10H63.9998ZM52.9998 -1H2V1H52.9998V-1ZM1 0V1H3V0H1ZM52.9998 0H2V2H52.9998V0ZM62.9998 10C62.9998 4.47715 58.5226 0 52.9998 0V2C57.4181 2 60.9998 5.58172 60.9998 10H62.9998ZM62.9998 133V10H60.9998V133H62.9998ZM52.9998 143C58.5226 143 62.9998 138.523 62.9998 133H60.9998C60.9998 137.418 57.4181 141 52.9998 141V143ZM2 143H52.9998V141H2V143ZM1 142V143H3V142H1Z"
                        fill="#2F80ED" mask="url(#path-1-inside-1_0_1)" />
                      <path d="M6.5 137.5L1.5 142.5L6.5 147.5" stroke="#2F80ED" />
                    </svg>
                  </div>
                </CCol>
              </CRow>
              <CRow
                className="rounded-3 bg-primary bg-gradient mx-0 px-4 py-4 d-flex flex-column flex-md-row align-items-center">
                <CCol xs={ 12 } md={ 9 }>
                  <h5 className="text-start text-white my-3">{t('landing.bank.section.7.title')}</h5>
                </CCol>
                <CCol xs={ 12 } md={ 3 }>
                  <CButton
                    size="sm"
                    className="text-primary py-2 border-0 bg-white"
                    block="true"
                    onClick={() => {
                      if (isBusinessFunctionality) window.open('/register', '_self')
                      if (!isBusinessFunctionality) window.open('/bank/register', '_self')
                    }}
                  >
                    {t('landing.bank.section.7.button')}
                  </CButton>
                </CCol>
              </CRow>
            </div>
          </section>}
        <section>
          <div className="container">
            <CCol xs={ 12 } md={ 5 }>
              <h2 className="text-start mb-4">
                {t('landing.bank.section.8.title')}
              </h2>
            </CCol>
            <CAccordion>
              {QA_SECTION[isBusinessFunctionality ? 'business' : 'bank'].map(question => (
                <CAccordionItem key={uuidv4()} className="mb-3 rounded-xl">
                  <CAccordionButton
                    className={activeKey === question.number ? 'rounded-top-xl' : 'rounded-xl'}
                    collapsed={activeKey !== question.number}
                    onClick={() =>
                      activeKey === question.number ? setActiveKey(0) : setActiveKey(question.number)
                    }
                  >
                    <h5 className={`m-0 ${activeKey === question.number && 'text-primary'}`}>
                      {t(question.title)}
                    </h5>
                  </CAccordionButton>
                  <CAccordionCollapse visible={activeKey === question.number}>
                    <CAccordionBody>
                      {t(question.answer)}
                    </CAccordionBody>
                  </CAccordionCollapse>
                </CAccordionItem>
              ))}
            </CAccordion>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="d-flex justify-between align-center">
            <div className="d-flex align-center">
              <img src={logo} alt="" className="logo d-none d-md-block" />
              <svg className="vertical-separator d-none d-md-block" width="1" height="45" viewBox="0 0 1 45" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="45" fill="#EFEFEF" />
              </svg>
              <nav className="header_nav">
                <ul className="d-flex">
                  <li><a className={isBusinessFunctionality ? "primary-color" : "secondary-color"} role="button"
                    onClick={() => setBusinessFunctionality(true)}>{t('business')}</a></li>
                  <li><a className={!isBusinessFunctionality ? "primary-color" : "secondary-color"} role="button"
                    onClick={() => setBusinessFunctionality(false)}>{t('bank')}</a></li>
                </ul>
              </nav>
            </div>
            <ul className="flex-column align-end contacts d-none d-md-flex">
              <li>
                <a href="tel:+375297712905" className="dark-grey-color">+ 375-29-771-29-05</a>
              </li>
              <li>
                <a href="mailto:info@depl.by" className="dark-grey-color">info@depl.by</a>
              </li>
            </ul>
          </div>
          <hr className="horizontal_separator my-3" />
          <nav className="d-flex footer_info d-none d-md-flex">
            <ul className="social_media d-flex align-end">
              <li>
                <a href="">
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.55025 12.5139C7.55025 11.6545 8.56025 11.2811 9.49027 10.6896C9.62297 10.6054 9.72627 10.5476 9.86615 10.4637L19.1466 4.69823C19.3345 4.58001 19.3467 4.54169 19.6003 4.60134C19.6003 5.00082 19.4662 4.9202 19.2366 5.14217L18.0853 6.24949C17.9652 6.35072 17.9293 6.36048 17.8116 6.47761C17.6556 6.63306 17.524 6.78816 17.3622 6.93168L15.4376 8.72155C15.2547 8.90737 15.112 8.99666 14.9369 9.17417C14.2361 9.88419 13.2308 10.7366 12.5629 11.4177C12.3811 11.6032 12.2409 11.6885 12.0622 11.8707C11.7459 12.1932 11.4543 12.4311 11.138 12.7535L10.1868 13.6595C9.82311 14.0232 9.71981 14.3243 9.62835 14.9613C9.54837 15.5181 9.46157 16.0737 9.40419 16.6001C9.37621 16.856 9.37513 17.2107 9.20046 17.3087C8.91927 17.4663 8.81024 17.133 8.74281 16.9056C8.60293 16.4313 8.47704 15.9421 8.33931 15.4479C8.2145 15 7.55025 12.8136 7.55025 12.5139ZM0 9.79236C0 10.2518 0.0387358 10.4022 0.584265 10.6144L4.99261 12.2695C5.26663 12.3725 5.56396 12.4911 5.86955 12.5948C6.27735 12.7333 6.16724 12.6762 6.38172 13.3385L8.39239 19.8794C8.52689 20.2626 8.69547 20.4264 9.14989 20.4264C9.40777 20.4264 9.69112 20.1307 9.86579 19.9886L11.7656 18.4261C12.0755 18.1749 12.7595 17.5361 13.1035 17.4525C13.6823 17.3115 14.3154 17.9066 14.9362 18.3737C15.0653 18.4709 15.1446 18.5382 15.2798 18.6322L19.2786 21.5568C19.7118 21.8869 20.1537 22.2329 20.5981 21.7347C20.819 21.4871 21.0213 20.195 21.1042 19.7753C21.8122 16.1995 22.6282 12.5157 23.3372 8.92255L23.9 6.21407C23.9864 5.85002 25 1.15391 25 0.619954C25 0.291336 24.7184 0.0151367 24.3002 0.0151367C23.9441 0.0151367 17.3895 2.62673 16.6072 2.94559L1.27147 8.90664C0.723068 9.12861 0 9.26382 0 9.79236H0Z"
                      fill="#C9C9C9" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.04132 2.05378C6.75489 2.00035 7.62877 2.03482 8.36131 2.03827L15.4506 2.03654C17.1776 2.04344 18.1429 2.05723 19.2856 2.94317C21.1988 4.42376 20.9541 6.25769 20.9541 8.35017V15.4377C20.9575 17.1906 20.9369 18.1059 20.0457 19.2728C19.439 20.0673 18.41 20.7964 17.0001 20.9223C16.0866 21.0033 8.72155 20.9378 7.55293 20.9412C5.86034 20.9481 4.81754 20.8999 3.7196 20.0346C2.92501 19.4106 2.18902 18.4265 2.06837 16.9838C2.00632 16.2478 2.04941 13.2263 2.04941 12.2524C2.04768 10.6822 2.05113 9.11201 2.05113 7.54179C2.04941 5.84058 2.07009 4.82019 2.95603 3.70673C3.59894 2.90353 4.57451 2.16582 6.04132 2.05378ZM16.8157 0.00439453H6.1499C5.64661 0.173309 4.30563 -0.0645503 2.45274 1.36433C1.553 2.05723 0.86528 2.95006 0.355088 4.33585C-0.122355 5.63202 0.022429 7.58833 0.0155345 9.06719C0.00691636 10.7563 0.0207053 12.4472 0.0172581 14.1364C0.0120872 17.213 -0.182682 19.6037 2.58201 21.7117C3.57481 22.4683 4.77273 22.9286 6.38604 22.9751C8.06312 23.0216 9.81605 22.9768 11.5017 22.9768C13.1823 22.9768 14.8973 23.0078 16.5744 22.9751C18.6668 22.9337 20.5904 21.9961 21.6625 20.4845C23.2069 18.3058 22.9914 16.9476 22.9862 14.1364C22.9828 12.4472 22.9966 10.7563 22.988 9.06719C22.9759 6.86268 23.2086 4.42721 21.7987 2.67256L21.2402 1.97622C20.5439 1.15233 19.1012 0.393933 17.955 0.147455C17.6809 0.088852 16.9708 0.0561032 16.8157 0.00439453V0.00439453Z"
                      fill="#C9C9C9" />
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.8864 7.66415C13.1754 7.29185 15.0231 8.9448 15.3299 10.8442C15.7057 13.1539 14.0441 15.0223 12.1481 15.3188C9.84362 15.679 7.97866 14.0605 7.67358 12.1352C7.29955 9.76869 8.95767 7.97957 10.8864 7.66415ZM5.59317 11.625C5.65349 12.6023 5.79655 13.228 6.15507 14.0105C7.64772 17.2561 11.9413 18.5006 14.9507 16.284C16.371 15.2377 17.5017 13.5124 17.412 11.3699C17.3724 10.4237 17.1931 9.71354 16.8484 8.96893C15.9418 7.00573 13.77 5.49411 11.3776 5.58202C10.5072 5.61477 9.67125 5.80609 8.98353 6.14564C7.02377 7.11604 5.44149 9.20679 5.59317 11.625Z"
                      fill="#C9C9C9" />
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M16.1917 5.47854C16.2538 6.24383 16.9415 6.88157 17.7826 6.81779C19.7475 6.66784 19.5011 3.66357 17.5137 3.86006C16.7467 3.9359 16.1228 4.61328 16.1917 5.47854Z"
                      fill="#C9C9C9" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <hr className="horizontal_separator d-block d-md-none my-3" />
          <ul className="flex-column align-start contacts d-flex d-md-none">
            <li>
              <a href="mailto:info@depl.by" className="dark-grey-color">info@depl.by</a>
            </li>
          </ul>
          <ul className="social_media d-flex align-start d-md-none mt-3">
            <li className="m-0 me-3">
              <a href="">
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M7.55025 12.5139C7.55025 11.6545 8.56025 11.2811 9.49027 10.6896C9.62297 10.6054 9.72627 10.5476 9.86615 10.4637L19.1466 4.69823C19.3345 4.58001 19.3467 4.54169 19.6003 4.60134C19.6003 5.00082 19.4662 4.9202 19.2366 5.14217L18.0853 6.24949C17.9652 6.35072 17.9293 6.36048 17.8116 6.47761C17.6556 6.63306 17.524 6.78816 17.3622 6.93168L15.4376 8.72155C15.2547 8.90737 15.112 8.99666 14.9369 9.17417C14.2361 9.88419 13.2308 10.7366 12.5629 11.4177C12.3811 11.6032 12.2409 11.6885 12.0622 11.8707C11.7459 12.1932 11.4543 12.4311 11.138 12.7535L10.1868 13.6595C9.82311 14.0232 9.71981 14.3243 9.62835 14.9613C9.54837 15.5181 9.46157 16.0737 9.40419 16.6001C9.37621 16.856 9.37513 17.2107 9.20046 17.3087C8.91927 17.4663 8.81024 17.133 8.74281 16.9056C8.60293 16.4313 8.47704 15.9421 8.33931 15.4479C8.2145 15 7.55025 12.8136 7.55025 12.5139ZM0 9.79236C0 10.2518 0.0387358 10.4022 0.584265 10.6144L4.99261 12.2695C5.26663 12.3725 5.56396 12.4911 5.86955 12.5948C6.27735 12.7333 6.16724 12.6762 6.38172 13.3385L8.39239 19.8794C8.52689 20.2626 8.69547 20.4264 9.14989 20.4264C9.40777 20.4264 9.69112 20.1307 9.86579 19.9886L11.7656 18.4261C12.0755 18.1749 12.7595 17.5361 13.1035 17.4525C13.6823 17.3115 14.3154 17.9066 14.9362 18.3737C15.0653 18.4709 15.1446 18.5382 15.2798 18.6322L19.2786 21.5568C19.7118 21.8869 20.1537 22.2329 20.5981 21.7347C20.819 21.4871 21.0213 20.195 21.1042 19.7753C21.8122 16.1995 22.6282 12.5157 23.3372 8.92255L23.9 6.21407C23.9864 5.85002 25 1.15391 25 0.619954C25 0.291336 24.7184 0.0151367 24.3002 0.0151367C23.9441 0.0151367 17.3895 2.62673 16.6072 2.94559L1.27147 8.90664C0.723068 9.12861 0 9.26382 0 9.79236H0Z"
                    fill="#C9C9C9" />
                </svg>
              </a>
            </li>
            <li className="m-0 me-3">
              <a href="">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M6.04132 2.05378C6.75489 2.00035 7.62877 2.03482 8.36131 2.03827L15.4506 2.03654C17.1776 2.04344 18.1429 2.05723 19.2856 2.94317C21.1988 4.42376 20.9541 6.25769 20.9541 8.35017V15.4377C20.9575 17.1906 20.9369 18.1059 20.0457 19.2728C19.439 20.0673 18.41 20.7964 17.0001 20.9223C16.0866 21.0033 8.72155 20.9378 7.55293 20.9412C5.86034 20.9481 4.81754 20.8999 3.7196 20.0346C2.92501 19.4106 2.18902 18.4265 2.06837 16.9838C2.00632 16.2478 2.04941 13.2263 2.04941 12.2524C2.04768 10.6822 2.05113 9.11201 2.05113 7.54179C2.04941 5.84058 2.07009 4.82019 2.95603 3.70673C3.59894 2.90353 4.57451 2.16582 6.04132 2.05378ZM16.8157 0.00439453H6.1499C5.64661 0.173309 4.30563 -0.0645503 2.45274 1.36433C1.553 2.05723 0.86528 2.95006 0.355088 4.33585C-0.122355 5.63202 0.022429 7.58833 0.0155345 9.06719C0.00691636 10.7563 0.0207053 12.4472 0.0172581 14.1364C0.0120872 17.213 -0.182682 19.6037 2.58201 21.7117C3.57481 22.4683 4.77273 22.9286 6.38604 22.9751C8.06312 23.0216 9.81605 22.9768 11.5017 22.9768C13.1823 22.9768 14.8973 23.0078 16.5744 22.9751C18.6668 22.9337 20.5904 21.9961 21.6625 20.4845C23.2069 18.3058 22.9914 16.9476 22.9862 14.1364C22.9828 12.4472 22.9966 10.7563 22.988 9.06719C22.9759 6.86268 23.2086 4.42721 21.7987 2.67256L21.2402 1.97622C20.5439 1.15233 19.1012 0.393933 17.955 0.147455C17.6809 0.088852 16.9708 0.0561032 16.8157 0.00439453V0.00439453Z"
                    fill="#C9C9C9" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M10.8864 7.66415C13.1754 7.29185 15.0231 8.9448 15.3299 10.8442C15.7057 13.1539 14.0441 15.0223 12.1481 15.3188C9.84362 15.679 7.97866 14.0605 7.67358 12.1352C7.29955 9.76869 8.95767 7.97957 10.8864 7.66415ZM5.59317 11.625C5.65349 12.6023 5.79655 13.228 6.15507 14.0105C7.64772 17.2561 11.9413 18.5006 14.9507 16.284C16.371 15.2377 17.5017 13.5124 17.412 11.3699C17.3724 10.4237 17.1931 9.71354 16.8484 8.96893C15.9418 7.00573 13.77 5.49411 11.3776 5.58202C10.5072 5.61477 9.67125 5.80609 8.98353 6.14564C7.02377 7.11604 5.44149 9.20679 5.59317 11.625Z"
                    fill="#C9C9C9" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M16.1917 5.47854C16.2538 6.24383 16.9415 6.88157 17.7826 6.81779C19.7475 6.66784 19.5011 3.66357 17.5137 3.86006C16.7467 3.9359 16.1228 4.61328 16.1917 5.47854Z"
                    fill="#C9C9C9" />
                </svg>
              </a>
            </li>
          </ul>
          <hr className="horizontal_separator my-3" />
          <p className="secondary-color font-size-xs">{t('landing.footer.disclaimer')}</p>
          <p className="secondary-color font-size-xs">{t('landing.footer.disclaimer.site')}</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingView
