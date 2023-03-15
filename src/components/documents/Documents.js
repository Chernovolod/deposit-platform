import React from 'react'
import {
  CCol,
  CCard,
  CCardBody,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ProfileTitle } from 'src/views/components/titles/profileTitle'
import Loader from 'src/views/components/loaders/intermittent'
import { useTranslation } from 'react-i18next'
import { FileUploader } from 'src/components/fileUploader'

const Documents = ({ isLoading, documentsList, deleteDocument, handleUploadDocument }) => {
  const { t } = useTranslation()
  const renderDocumentsList = () => (
    <>
      <CCol className="d-flex flex-wrap">
        { documentsList.length
          ? documentsList.map(document => (
          <div key={document.id} className="me-3 mt-3">
            <img
              style={ { objectFit: 'cover' } }
              className="position-relative rounded-3"
              width="100"
              height="100"
              src={ document.url }
            />
            <CButton
              onClickCapture={ deleteDocument }
              data-id={ document.id }
              style={ {
                zIndex: 5,
                boxShadow: 'none'
              } }
              className="bg-transparent position-absolute top-1 end-1 translate-middle m-0 border-0 rounded-circle p-0"
            >
              {<CIcon style={{pointerEvents: 'none'}} name="cross" height={16}/>}
            </CButton>
          </div>
        ))
        : <span>{t('profile.documents.warning.text')}</span>}
      </CCol>
    </>
  )
  const renderContent = () => (
    <>
      <span className="text-start">
        { t('profile.documents.description') }
      </span>
      <FileUploader handleUploadDocument={handleUploadDocument} />
      <h4 className="mt-5 mb-3">{ t('profile.documents.downLoadedFiles') }</h4>
      { isLoading && <Loader /> }
      {!isLoading && renderDocumentsList()}
    </>
  )

  return (
    <>
      <ProfileTitle title={ t('profile.documents.subtitle') }/>
      <CCard>
        <CCardBody>
          { renderContent() }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Documents
