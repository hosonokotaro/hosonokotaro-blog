import React, { useState } from 'react';

import { StyledTitle } from './styledUploadImages';
import UploadFile from './UploadFile';
import UploadFiles from './UploadFiles';

const UploadImages: React.FC<{ uploadPath: string }> = (props) => {
  const [uploadFilename, setUploadFilename] = useState('');

  return (
    <>
      <StyledTitle>画像</StyledTitle>
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

export default UploadImages;
