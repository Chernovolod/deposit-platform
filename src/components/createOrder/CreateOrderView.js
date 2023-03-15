import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CFormSelect,
  CCol,
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormControl,
  CFormFloating,
  CFormLabel,
  CToaster,
  CFormText
} from '@coreui/react'
import Loader from 'src/views/components/loaders/intermittent'
import ProfitabilityCalculator from 'src/components/profitabilityCalculator'
import { registerLocale, setDefaultLocale } from "react-datepicker";

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru)

const CreateOrderView = ({
                           withCalculator,
                           formData,
                           isLoading,
                           toaster,
                           toast,
                           handleCreateRequest,
                           onChange,
                           isEmptyPercentage,
                           isLessAmount,
                           isCorrectPercentage,
                           isCorrectAmount,
  currency,
                           onDateInputChange
                         }) => {
  const { t } = useTranslation()
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    setStartDate(formData.returnBefore)
  }, [formData.returnBefore])
  // const MyContainer = ({ className, children }) => {
  //   return (
  //     <div style={ { fontFamily: "Gilroy Regular" } }>
  //       <div style={ { position: "relative" } }>{ children }</div>
  //     </div>
  //   );
  // };
  const renderContent = () => (
    <>
      <h6 className="mb-4">{ t('requests.create.form.title', {currency}) } </h6>
      <CForm className="create-request-form row">
        <CCol xs={ 8 } xl={ 2 }>
          <CFormText component="span" id="amount">{ t('requests.create.form.amount') }</CFormText>
          <CFormControl
            aria-describedby="amount"
            autoComplete="off"
            type="number"
            name="amount"
            id="amount"
            placeholder="0"
            onChange={ onChange }
            invalid={isLessAmount}
            valid={isCorrectAmount}
          />
          {isLessAmount &&
            <div className="text-danger">
              {t('requests.create.form.input.errorText.amount', {currency})}
            </div>
          }
        </CCol>
        <CCol xs={ 4 } xl={ 1 }>
          <CFormText className="text-nowrap" component="span" id="currency">{ t('requests.create.form.currency') }</CFormText>
          <CFormSelect name="currency" onChange={ onChange } aria-describedby="currency"
                       aria-label={ t('requests.create.form.currency') }>
            <option value="BYN">BYN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
          </CFormSelect>
        </CCol>
        <CCol xs={ 4 } xl={ 1 }>
          <CFormText className="text-nowrap" component="span" id="percentage">{ t('requests.create.form.percentage') }, %</CFormText>
          <CFormControl
            aria-describedby="percentage"
            autoComplete="off"
            type="number"
            name="percentage"
            id="percentage"
            onChange={ onChange }
            invalid={isEmptyPercentage}
            valid={isCorrectPercentage}
          />
          {isEmptyPercentage &&
            <div className="text-danger">
              {t('requests.create.form.input.errorText.percentage')}
            </div>
          }
        </CCol>
        <CCol xs={ 8 } xl={ 2 }>
          <CFormText component="span" id="days">{ t('requests.create.form.days') }</CFormText>
          <CFormSelect name="days" onChange={ onChange } aria-describedby="days"
                       aria-label={ t('requests.create.form.days') }>
            <option value="90">{t('requests.bank.orders.form.select.1.days.90')}</option>
            <option value="180">{t('requests.bank.orders.form.select.2.days.180')}</option>
            <option value="365">{t('requests.bank.orders.form.select.3.days.365')}</option>
            <option value="1095">{t('requests.bank.orders.form.select.4.days.1095')}</option>
          </CFormSelect>
        </CCol>
        <CCol xl={ 2 }>
          <CFormText aria-describedby="returnBefore" component="span"
                     id="days">{ t('requests.create.form.returnBefore') }</CFormText>
          <DatePicker
            // calendarContainer={ MyContainer }
            locale="ru"
            selected={ startDate }
            dateFormat="dd/MM/yyyy"
            placeholderText={ t('requests.create.form.returnBefore.placeholder') }
            onChange={ (date) => {
              onChange({ target: { name: 'returnBefore', value: date } })
              // setStartDate(date)
            } }
            customInput={
              <CFormControl
                // className="safari_only"
                autoComplete="off"
                name="returnBefore"
                id="returnBefore"
              /> }
          />
        </CCol>
        <CCol xl={ 2 }>
          <CFormText component="span" id="type">{ t('requests.create.form.type') }</CFormText>
          <CFormSelect name="type" onChange={ onChange } aria-describedby="type"
                       aria-label={ t('requests.create.form.type') }>
            <option value="IRREVOCABLE">{t('Irrevocable')}</option>
            <option value="REVOCABLE">{t('Revocable')}</option>
          </CFormSelect>
        </CCol>
        <CCol xl={ 2 }>
          <CFormText component="span" id="activeUntil">{ t('requests.create.form.activeUntil') }</CFormText>
          <CFormSelect name="activeUntil" onChange={ onChange } aria-describedby="activeUntil"
                       aria-label={ t('requests.create.form.activeUntil') }>
            <option value="3">{t('requests.bank.orders.form.select.5.days.3')}</option>
            <option value="6">{t('requests.bank.orders.form.select.6.days.6')}</option>
            <option value="9">{t('requests.bank.orders.form.select.6.days.9')}</option>
          </CFormSelect>
        </CCol>
      </CForm>
      <CButton
        onClick={ handleCreateRequest }
        size="sm"
        disabled={isLoading}
        color="primary"
        className="col-12 col-md-3 mt-5 py-2 text-white d-block ms-auto"
      >
        { t('requests.create.submitButton') }
      </CButton>
    </>
  )
  return (
    <>
      <CCard>
        <CCardBody className="py-4">
          { isLoading && <Loader/> }
          { !isLoading && renderContent() }
        </CCardBody>
      </CCard>
      { withCalculator && <h2 className="mt-5">{ t('requests.calculator.title') }</h2> }
      { withCalculator && <ProfitabilityCalculator/> }
      <CToaster ref={ toaster } push={ toast } placement="top-end"/>
    </>
  )
}

export default CreateOrderView
