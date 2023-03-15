import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormControl,
  CRow,
  CLink,
  CFormFloating,
  CFormLabel,
  CToaster, CFormText
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import classnames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { isEmpty } from 'src/utils'
import Autosuggest from 'react-autosuggest'
import IsolatedScroll from "react-isolated-scroll";

const AUTOSUGGEST_THEME = {
  container: '',
  containerOpen: '',
  input: '',
  inputOpen: '',
  inputFocused: '',
  // suggestionsContainer:     '',
  // suggestionsContainerOpen: '',
  suggestionsList: 'list-group',
  suggestion: 'list-group-item list-group-item-action',
  suggestionFirst: '',
  suggestionHighlighted: '',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'react-autosuggest__section-title'
}
const RegisterView = ({
                        getSuggestionValue,
                        onSuggestionsFetchRequested,
                        suggestions,
                        onSuggestionSelected,
                        registrationMode,
                        setRegistrationMode,
                        sendRequest,
                        goBack,
                        onChange,
                        isLoading,
                        toaster,
                        toast,
                        formData,
                        validation,
                        isRegistrationCompleted,
                        history
                      }) => {
  const { t } = useTranslation()
  const setHeading = () => t(`register.${ registrationMode }.title`)
  const setDescription = () => t(`register.${ registrationMode }.description`)
  const setPrimaryButtonContent = () => t(`register.${ registrationMode }.button`)
  const setSecondaryButtonContent = () => t(registrationMode === 'initial' ? 'register.joinCompany' : 'goBack')
  const renderSuggestion = ({ name }) => (name)
  const renderSuggestionsContainer = ({ containerProps, children }) => {
    const { ref, ...restContainerProps } = containerProps;
    const callRef = isolatedScroll => {
      if (isolatedScroll !== null) {
        ref(isolatedScroll.component);
      }
    };

    return (
      <IsolatedScroll ref={ callRef } { ...restContainerProps }>
        { children }
      </IsolatedScroll>
    );
  }
  const renderAutosuggestInputComponent = (inputProps) => (
    <div>
      <CFormFloating>
        <CFormControl
          { ...inputProps }
        />
        <CFormLabel htmlFor="company">{ t('companyName') }</CFormLabel>
      </CFormFloating>
    </div>
  )
  const onSuggestionsClearRequested = () => {
  }
  // const renderSuggestionsContaine = ({ containerProps, children, query }) => (
  //   <CListGroup {...containerProps}>
  //     {children}
  //   </CListGroup>
  // )
  const renderNewAccountModeInputs = () => (
    <CRow className="mt-3">
      <div className="px-0 col-12 col-md-3">
        <CFormFloating>
          <CFormControl
            value={ formData[registrationMode].company || '' }
            type="text"
            name="company"
            id="company"
            placeholder={ t('companyName') }
            onChange={ onChange }
          />
          <CFormLabel htmlFor="company">{ t('companyName') }</CFormLabel>
        </CFormFloating>
      </div>
      <div className="px-0 my-3 my-md-0 mx-md-4 col-12 col-md-3">
        <CFormFloating>
          <CFormControl
            value={ formData[registrationMode].email || '' }
            valid={ formData.newAccount?.email && validation.newAccount?.email }
            invalid={ Boolean(formData.newAccount?.email && !validation.newAccount?.email) }
            type="email"
            name="email"
            id="email"
            placeholder={ t('email') }
            onChange={ onChange }
          />
          {
            Boolean(formData.newAccount?.email && !validation.newAccount?.email) &&
            <CFormText className="text-danger">{t('landing.registration.errorEmailText')}</CFormText>
          }
          <CFormLabel htmlFor="email">{ t('email') }</CFormLabel>
        </CFormFloating>
      </div>
    </CRow>
  )
  const renderExistingCompanyRegistrationModeInputs = () => (
    <CRow>
      <CRow>
        <div className="px-0 col-12 col-md-3">
          <Autosuggest
            id="autosuggest"
            theme={ AUTOSUGGEST_THEME }
            suggestions={ suggestions }
            onSuggestionsFetchRequested={ onSuggestionsFetchRequested }
            onSuggestionsClearRequested={ onSuggestionsClearRequested }
            getSuggestionValue={ getSuggestionValue }
            renderSuggestion={ renderSuggestion }
            renderInputComponent={ renderAutosuggestInputComponent }
            renderSuggestionsContainer={ renderSuggestionsContainer }
            onSuggestionSelected={ onSuggestionSelected }
            inputProps={ {
              valid: Boolean(formData[registrationMode].company.length && validation.existingCompany?.company),
              invalid: Boolean(formData[registrationMode].company.length && !validation.existingCompany?.company),
              autoComplete: 'off',
              name: 'company',
              type: 'text',
              id: 'company',
              placeholder: t('companyName'),
              value: formData[registrationMode].company || '',
              onChange
            } }
          />
        </div>
        <div className="px-0 mx-md-4 col-12 col-md-3">
          <CFormFloating>
            <CFormControl
              autoComplete="off"
              value={ formData[registrationMode].email || '' }
              valid={ formData.existingCompany?.email && validation.existingCompany?.email }
              invalid={ formData.existingCompany?.email && !validation.existingCompany?.email }
              type="email"
              name="email"
              id="email"
              placeholder={ t('email') }
              onChange={ onChange }
            />
            {
              Boolean(formData.existingCompany?.email && !validation.existingCompany?.email) &&
              <CFormText className="text-danger">{t('landing.registration.errorEmailText')}</CFormText>
            }
            <CFormLabel htmlFor="email">{ t('email') }</CFormLabel>
          </CFormFloating>
        </div>
      </CRow>
      <CRow className="mt-3">
        <div className="px-0 col-12 col-md-3">
          <CFormFloating>
            <CFormControl
              type="text"
              id="lastName"
              name="lastName"
              value={ formData[registrationMode].lastName || '' }
              onChange={ onChange }
              placeholder={ t('lastName') }
            />
            <CFormLabel htmlFor="lastName">{ t('lastName') }</CFormLabel>
          </CFormFloating>
        </div>
        <div className="px-0 mx-md-4 col-12 col-md-3">
          <CFormFloating>
            <CFormControl
              value={ formData[registrationMode].firstName || '' }
              type="text"
              id="firstName"
              name="firstName"
              onChange={ onChange }
              placeholder={ t('firstName') }
            />
            <CFormLabel htmlFor="firstName">{ t('firstName') }</CFormLabel>
          </CFormFloating>
        </div>
        <div className="px-0 mb-3 mb-md-0 col-12 col-md-3">
          <CFormFloating>
            <CFormControl
              value={ formData[registrationMode].middleName || '' }
              type="text"
              id="middleName"
              name="middleName"
              onChange={ onChange }
              placeholder={ t('middleName') }
            />
            <CFormLabel htmlFor="middleName">{ t('middleName') }</CFormLabel>
          </CFormFloating>
        </div>
      </CRow>
    </CRow>
  )
  const renderLoading = () => (
    <div className="d-flex min-vh-100 flex-column align-items-center justify-content-center col-lg-8 mx-auto">
      { !isRegistrationCompleted
        ? (
          <div className="d-flex justify-content-center intermittent spinner-border text-primary"
               style={ { width: '5em', height: '5em' } }
               role="status"> {/* TODO сделать новый класс для спиннера, а  не переопределять этот в custom.scss*/ }
            <span className="sr-only"/>
          </div>)
        : (<div className="completedRegistration" style={ { width: '5em', height: '5em' } }/>) }
      <h1
        className="mt-5 text-center">{ t(`register.${ registrationMode }.loading.${ isRegistrationCompleted ? 'success' : 'pending' }`) }</h1>
      { (existingCompanyRegistrationMode && isRegistrationCompleted) &&
      <p className="text-center font-size-lg">{ t('register.existingCompany.loading.description') }</p> }
    </div>
  )
  const initialRegistrationMode = registrationMode === 'initial'
  const newAccountRegistrationMode = registrationMode === 'newAccount'
  const existingCompanyRegistrationMode = registrationMode === 'existingCompany'
  const renderContent = () => (
    <CCol className={ classnames({ 'd-flex flex-column justify-content-between': !initialRegistrationMode }) }>
      <CRow>
        <h1>{ setHeading() }</h1>
        <CCol lg={ 8 }>
          <p>{ setDescription() }</p>
        </CCol>
      </CRow>
      { !initialRegistrationMode &&
      <CRow className="mx-0 mb-3 flex-md-grow-1">
        <CForm className="row flex-column justify-content-between">
          { newAccountRegistrationMode && renderNewAccountModeInputs() }
          { existingCompanyRegistrationMode && renderExistingCompanyRegistrationModeInputs() }
          { !initialRegistrationMode &&
          <CFormCheck
            id="checkbox"
            name="checkedAgreement"
            value=""
            checked={ formData[registrationMode].checkedAgreement }
            onChange={ onChange }
            label={
              <Trans
                // i18nKey="register.privacyPolicy" // TODO разобраться как правильно юзать
                defaults="Я согласен с <l href='{{conditions}}'>условиями</l> и <l href='{{privacyPolicy}}'>политикой конфиденциальности</l>" // optional defaultValue
                values={ { conditions: '/conditions', privacyPolicy: '/privacy-policy' } }
                components={ { l: <CLink target="_blank" rel="noopener noreferrer"/> } }
              /> }
          /> }
        </CForm>
      </CRow> }
      <div
        className={ classnames('mt-5 mt-md-0 d-flex flex-wrap', { 'mt-5 flex-column align-items-start': initialRegistrationMode }) }>
        <CButton
          key={ uuidv4() }
          className={ classnames('text-white btn-lg col-12', {
            'mb-3 col-md-4': initialRegistrationMode,
            'mb-3 mb-md-0 col-md-3': !initialRegistrationMode
          }) }
          color="primary"
          block="true"
          disabled={ !initialRegistrationMode && (!validation.isValid || isEmpty(formData[registrationMode]) || !formData[registrationMode].checkedAgreement) }
          data-registration-mode="newAccount"
          onClick={ initialRegistrationMode ? setRegistrationMode : sendRequest }
        >
          { setPrimaryButtonContent() }
        </CButton>
        <CButton
          key={ uuidv4() }
          className={ classnames('btn-lg col-12', {
            'mx-md-3 col-md-3': !initialRegistrationMode,
            'col-md-6': initialRegistrationMode
          }) }
          color="primary"
          variant="outline"
          block="true"
          data-registration-mode="existingCompany"
          onClick={ initialRegistrationMode ? setRegistrationMode : goBack }
        >
          { setSecondaryButtonContent() }
        </CButton>
      </div>
    </CCol>
  )

  return (
    <CContainer className="min-vh-100 d-flex flex-column pb-4 pt-5">
      { isLoading && renderLoading() }
      { !isLoading && renderContent() }
      { initialRegistrationMode && <CButton
        key={ uuidv4() }
        className="btn-lg col-12 col-md-3 mt-5 mt-md-0"
        color="primary"
        variant="outline"
        onClick={ () => history.goBack() }
      >
        { t('goBack') }
      </CButton> }
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </CContainer>
  )
}

export default RegisterView
