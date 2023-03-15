import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormControl,
  CFormSelect,
  CFormText,
  CRow,
  CLink,
  CListGroupItem,
  CModalHeader,
  CModalContent,
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CToaster,
} from '@coreui/react'
import Loader from '../../views/components/loaders/intermittent'
import classnames from 'classnames'
import RegularLoader from 'src/views/components/loaders/regular'

const RenderRequestModal = ({ isModalVisible, closeRequestModal, t, modalFormData, applyOfferHandler, currentSuggestion :{ minAmount, currency, id }, isLoading, onModalChange, onClick, valid }) => (
  <CModal alignment="center" visible={ isModalVisible } onDismiss={ closeRequestModal }>
    <CModalContent className="pb-4 px-3">
      <CModalHeader onDismiss={ closeRequestModal }>
        <CModalTitle component="h2">{ t('requests.modal.title.apply') }</CModalTitle>
      </CModalHeader>
      <CModalBody className="mb-7">
        <CForm>
          <CRow className="mt-4">
            <CCol xl={ 9 }>
              <CFormText component="span"
                         id="amount">{ `${ t('requests.modal.content.text') } ${ currency }` }</CFormText>
              <CFormControl
                valid={ valid }
                invalid={ !valid }
                aria-describedby="amount"
                autoComplete="off"
                type="number"
                min={ minAmount }
                name="amount"
                id="amount"
                value={ modalFormData.amount }
                placeholder={ minAmount }
                onChange={ onModalChange }
              />
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter className="justify-content-start">
        <CButton onClick={ ()=> applyOfferHandler(modalFormData, id) }
                 disabled={ isLoading || !valid }
                 className="text-white py-2" size="sm"
                 color="primary">
          { isLoading
            ? <RegularLoader classes="text-white"/>
            : t('requests.modal.footer.button.send') }
        </CButton>
      </CModalFooter>
    </CModalContent>
  </CModal>
)

const SingleBankResponse = ({ t, id, name, currency, percentage, days, type, minAmount, onClickHandler }) => (
  <CListGroupItem className="employees py-4 px-3" key={ id }>
    <CRow className="m-0 align-items-stretch ">
      <CCol className="p-0 mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
        <small className="text-muted">{t('bank')}</small>
        <h6 className="d-block">{ `${ name }` }</h6>
      </CCol>
      <CCol className="p-0 mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
        <small className="text-muted">{ t('requests.create.form.percentage') }</small>
        <span className="d-block">{ `${ percentage } %` }</span>
      </CCol>
      <CCol className="p-0 mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
        <small className="text-muted">{ t('requests.create.form.days') }</small>
        <span className="d-block">{ t(`requests.days.${ days }`) }</span>
      </CCol>
      <CCol className="p-0 mb-3 mb-md-0 text-end text-md-start" xs={ 6 } xl={ 2 }>
        <small className="text-muted">{ t('requests.create.form.type') }</small>
        <span className="d-block">{ t(`requests.${ type }`) }</span>
      </CCol>
      <CCol className="p-0 mb-3 mb-md-0" xs={ 6 } xl={ 2 }>
        <small className="text-muted">{ t('requests.create.form.minimalAmount') }</small>
        <span className="m-0 d-block">{ `${ minAmount } ${ currency }` }</span>
      </CCol>
      <CCol xs={ 6 } xl={ 2 } className=" p-0 d-flex align-self-center justify-content-end">
        <CLink
          role="button"
          data-id={ id }
          onClick={ onClickHandler }
          className="text-primary text-end text-md-start fw-bold"
        >
          {t('requests.bank.profitAbillity.SingleBankResponse.link')}
        </CLink>
      </CCol>
    </CRow>
  </CListGroupItem>
)

const ProfitabilityCalculatorView = ({
                                       suggestions,
                                       isLoading,
                                       amount,
                                       currency,
                                       percentage,
                                       days,
                                       sum,
                                       calculateProfit,
                                       onChange,
                                       isModalVisible, 
                                       openRequestModal,
                                       valid,
                                       modalFormData,
                                       onModalChange,
                                       currentSuggestion,
                                       applyOfferHandler,
                                       closeRequestModal,
                                       toast,
                                       t,
                                       toaster,
                                       ...rest
                                     }) => {
  return (
    <>
      <CRow xl={ { col: 2 } }>
        <CCol xl={ 6 }>
          <CCard>
            <CCardBody className="py-4 pe-3">
              <CForm className="row">
                <CCol xs={8} xl={ 4 }>
                  <CFormText component="span" id="amount">{ t('requests.create.form.amount') }</CFormText>
                  <CFormControl
                    aria-describedby="amount"
                    autoComplete="off"
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="0"
                    onChange={ onChange }
                  />
                </CCol>
                <CCol xs={4} xl={ 2 }>
                  <CFormText component="span" id="currency">{ t('requests.create.form.currency') }</CFormText>
                  <CFormSelect name="currency"
                               onChange={ onChange }
                               aria-describedby="currency" aria-label={ t('requests.create.form.currency') }>
                    <option value="BYN">{t('BYN')}</option>
                    <option value="USD">{t('USD')}</option>
                    <option value="EUR">{t('EUR')}</option>
                    <option value="RUB">{t('RUB')}</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={4} xl={ 2 } className="amount-container">
                  <CFormText component="span" id="percentage">{ t('requests.create.form.percentage') }</CFormText>
                  <CFormControl
                    aria-describedby="percentage"
                    autoComplete="off"
                    type="number"
                    name="percentage"
                    id="percentage"
                    // placeholder="%"
                    onChange={ onChange }
                  />
                </CCol>
                <CCol xs={8} xl={ 4 }>
                  <CFormText component="span" id="days">{ t('requests.create.form.days') }</CFormText>
                  <CFormSelect name="days"
                               onChange={ onChange }
                               aria-describedby="days" aria-label={ t('requests.create.form.days') }>
                    <option value="90">{t('requests.bank.profitAbillity.form.select.1.days.90')}</option>
                    <option value="180">{t('requests.bank.profitAbillity.form.select.1.days.180')}</option>
                    <option value="365">{t('requests.bank.profitAbillity.form.select.1.days.365')}</option>
                    <option value="1095">{t('requests.bank.profitAbillity.form.select.1.days.1095')}</option>
                  </CFormSelect>
                </CCol>
              </CForm>
              <CButton
                onClick={ calculateProfit }
                size="sm"
                color="primary"
                className="px-5 col-12 col-md-6 py-2 mt-5 text-white d-block ms-auto"
              >
                { t('requests.calculator.submit') }
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xl={ 6 }>
          <CCard className="h-100">
            <CCardBody className={ classnames('py-4 pe-5 d-flex flex-column', {
              'justify-content-center': isLoading,
              'justify-content-between': !isLoading
            }) }>
              { isLoading && <Loader/> }
              { !isLoading &&
              <>
                <h6>{ t('requests.calculator.result.title') }</h6>
                <CRow className="align-items-stretch m-0">
                  <CCol className="p-0" xs={ 6 } xl={ 4 }>
                    <small className="text-muted">{ t('requests.create.form.amount') }</small>
                    <span className="d-block">{ `${ amount } ${ currency }` }</span>
                  </CCol>
                  <CCol className="p-0" xs={ 6 } xl={ 2 }>
                    <small className="text-muted">{ t('requests.create.form.percentage') }</small>
                    <span className="d-block">{ percentage } %</span>
                  </CCol>
                  <CCol className="p-0" xs={ 6 } xl={ 3 }>
                    <small className="text-muted">{ t('requests.create.form.days') }</small>
                    <span className="d-block">{ t(`requests.days.${ days }`) }</span>
                  </CCol>
                  <CCol className="p-0" xs={ 6 } xl={ 3 }>
                    <small className="text-muted">{t('requests.create.form.accruals')}</small>
                    <span className="d-block">{ `${ sum } ${ currency }` }</span>
                  </CCol>
                </CRow>
                <CRow className="m-0">
                  <CCol className="p-0" xs={ 12 } xl={ 4 }>
                    <small className="text-muted">{t('requests.create.form.totalAmount')}</small>
                    <h6 className="m-0">{ `${ Number(amount) + Number(sum) } ${ currency }` }</h6>
                  </CCol>
                </CRow>
              </>
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      { suggestions.length
        ? (<>
            { isLoading && <Loader classes="mt-5"/> }
            { !isLoading && (
              <>
              <h2 className="mt-5">{ t('requests.calculator.offers.title') }</h2>
                {suggestions.map(el => <SingleBankResponse onClickHandler={openRequestModal} t={ t } { ...el } />)}
                { isModalVisible &&  <RenderRequestModal onModalChange={onModalChange}
                                                         modalFormData={modalFormData}
                                                         applyOfferHandler={applyOfferHandler}
                                                         t={t}
                                                         valid={valid}
                                                         closeRequestModal={closeRequestModal}
                                                         currentSuggestion={currentSuggestion}
                                                         isModalVisible={isModalVisible}
                /> }
                </>
            )}</>
        )
        : null }
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default ProfitabilityCalculatorView
