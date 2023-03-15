import {
  CButton,
  CModal,
  CModalBody,
  CModalContent, CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import { connect } from 'react-redux'
import { setApprovalModalVisibility } from 'src/store'
import { useTranslation } from 'react-i18next'

const RequestAccountApprovalModal = ({ isApprovalModalShown, setVisible }) => {
  const { t } = useTranslation()

  return (
    <CModal alignment="center" visible={isApprovalModalShown} onDismiss={() => setVisible(false)}>
      <CModalContent className="pb-4 px-3">
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle className="mt-3" component="h2">{t('approvalModal.title')}</CModalTitle>
        </CModalHeader>
        <CModalBody className="mb-7">
          {t('approvalModal.text')}
        </CModalBody>
        <CModalFooter className="d-flex justify-content-start">
          <CButton onClick={() => {
            setVisible(false)
            window.open('/profile', '_self')
          }} className="text-white py-2" size="sm" color="primary" >
            { t('approvalModal.primaryButton') }
          </CButton>
          <CButton onClick={() => setVisible(false)} className="py-2" size="sm" color="primary" variant="outline" >
            { t('cancel') }
          </CButton>
        </CModalFooter>
      </CModalContent>
    </CModal>
  )
}

const mapStateToProps = ({isApprovalModalShown}) => ({
  isApprovalModalShown
})

const mapDispatchToProps = (dispatch) => ({
  setVisible: isShown => dispatch(setApprovalModalVisibility(isShown)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestAccountApprovalModal)
