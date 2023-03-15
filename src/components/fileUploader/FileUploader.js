import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { useDropzone } from 'react-dropzone';
import { CButton } from '@coreui/react'
import { uploadDocument } from 'src/services'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function FileUploader({ handleUploadDocument }) {
  const { t } = useTranslation()
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: async ([acceptedFile]) => {
      const fd = new FormData()
      fd.append('file', acceptedFile, acceptedFile.name)
      handleUploadDocument(fd)
    }
  });

  const thumbs = files.map(file => (
    <div style={ thumb } key={ file.name }>
      <div style={ thumbInner }>
        <img
          src={ file.preview }
          style={ img }
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (<>
      <CButton className="mx-auto mx-md-0 mt-3 mt-md-0 d-block d-md-none text-white py-2 mb-3 mb-md-0" size="sm"
               color="primary">{ t('profile.documents.upload') }</CButton>
      <section className="py-5 mt-3 d-none d-md-block" style={ { border: '2px dashed #2F80ED', borderRadius: '5px' } }>
        <div { ...getRootProps({ className: 'd-flex dropzone flex-column flex-md-row align-items-center justify-content-center' }) }>
          <input { ...getInputProps() } />
          <CButton className="text-white py-2 mb-3 mb-md-0" size="sm"
                   color="primary">{ t('profile.documents.upload') }</CButton>
          <p className="text-muted text-center text-md-start ms-5 mb-0">{ t('profile.documents.info') }</p>
        </div>
        <aside style={ thumbsContainer } className={ classnames({ 'mt-3': files.length }) }>
          { thumbs }
        </aside>
      </section>
    </>
  );
}

export default FileUploader
