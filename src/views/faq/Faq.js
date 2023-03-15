import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  CAccordion,
  CAccordionItem,
  CAccordionButton,
  CAccordionHeader,
  CAccordionCollapse,
  CAccordionBody,
  CFormLabel,
  CFormFloating,
  CFormControl,
  CModal,
  CModalContent,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CCol,
  CRow,
  CButton, CToast, CToastHeader, CToastBody, CToaster
} from '@coreui/react'
import { sendQuestion } from 'src/services'
import { PageTitle } from '../components/titles/pageTitle'
import RegularLoader from '../components/loaders/regular'
import { Helmet } from 'react-helmet'

const BUSINESS_QUESTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const BANK_QUESTIONS = [1, 2, 3, 4, 5]

const Faq = ({ user }) => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [valid, setValid] = useState(!!user?.email)
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: user.email,
    phone: user.phone,
    name: '',
    message: ''
  })
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const showErrorToast = (message = '', isError = true) => (
    <CToast title={isError ? t('defaultErrorTitle') : t('congratulations')} autohide={true}>
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill={ isError ? '#EB5757' : '#6FCF97' }></rect>
        </svg>
        <strong className="me-auto">{isError ? t('defaultErrorTitle') : t('congratulations')}</strong>
      </CToastHeader>
      <CToastBody>{message || t('default400Error')}</CToastBody>
    </CToast>
  )
  const onChange = ({ target: {name, value}}) => {
    if (name === 'email') {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = re.test(String(value).toLowerCase())
      if (isEmailValid) {
        setValid(true)
      } else setValid(false)
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onSubmit = async () => {
    try {
      setLoading(true)
      const data = await sendQuestion(formData)
      if (!data.message) {
        addToast(() => showErrorToast(t('toast.modal.send.question.successText'), false))
        setVisible(false)
        setFormData({
          email: '',
          phone: '',
          name: '',
          message: ''
        })
      }
      if (data.message) {
        addToast(() => showErrorToast(data.message))
      }
    } catch (e) {
      addToast(() => showErrorToast())
    } finally {
      setLoading(false)
    }
  }
  const QUESTIONS = user.type === 'BUSINESS_ADMIN' ? BUSINESS_QUESTIONS : BANK_QUESTIONS
  const [activeKey, setActiveKey] = useState(0)
  const renderContent = () => (
    <CAccordion>
      {QUESTIONS.map(questionNumer => (
        <CAccordionItem key={questionNumer} className="mb-3 rounded-xl">
          <h4>
            <CAccordionButton
              className={activeKey === questionNumer ? 'rounded-top-xl' : 'rounded-xl'}
              collapsed={activeKey !== questionNumer}
              onClick={() =>
                activeKey === questionNumer ? setActiveKey(0) : setActiveKey(questionNumer)
              }
            >
              {t(`faq.${user.type}.accordion.${questionNumer}.title`)}
            </CAccordionButton>
          </h4>
          <CAccordionCollapse visible={activeKey === questionNumer}>
            <CAccordionBody>
              {t(`faq.${user.type}.accordion.${questionNumer}.description`)}
            </CAccordionBody>
          </CAccordionCollapse>
        </CAccordionItem>
      ))}
    </CAccordion>
  )
  const renderEditModal = () => (
    <CModal alignment="center" visible={visible} onDismiss={() => setVisible(false)}>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle component="h2">{t('faq.modal.title')}</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
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
            <CCol className="mt-4" xl={6}>
              <CFormFloating>
                <CFormControl
                  valid={valid}
                  invalid={!valid}
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
            <CCol className="mt-4" xl={6}>
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
        <CModalFooter className="d-flex justify-content-start">
          <CButton onClick={onSubmit} disabled={isLoading || !valid} className="text-white py-2" size="sm" color="primary" >
            {isLoading ? <RegularLoader classes="text-white" /> : t('faq.modal.primaryButton')}
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )

  return (
    <>
      <Helmet>
        <title>Вопросы и ответы | Deposit Platform</title>
      </Helmet>
      <PageTitle
        title={t('faq.title')}
        withPrimaryButton
        primaryButtonLabel={t('faq.primaryButtonLabel')}
        onPrimaryButtonClick={() => setVisible(!visible)}
      />
      {renderContent()}
      {renderEditModal()}
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps, null)(Faq)
