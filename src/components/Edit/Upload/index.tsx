import React, { useState } from 'react';

import UploadFile from './UploadFile';
import UploadFiles from './UploadFiles';

const Upload: React.FC<{ uploadPath: string }> = (props) => {
  const [uploadFilename, setUploadFilename] = useState('');

  return (
    <>
      <UploadFile
        uploadPath={props.uploadPath}
        setUploadFilename={setUploadFilename}
      />
      <UploadFiles
        uploadPath={props.uploadPath}
        uploadFilename={uploadFilename}
      />
    </>
  );
};

export default Upload;
