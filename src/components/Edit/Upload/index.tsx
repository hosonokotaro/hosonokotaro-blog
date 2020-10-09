import React, { useState } from 'react';
import styled from 'styled-components';

import UploadFile from './UploadFile';
import UploadFiles from './UploadFiles';

const Upload: React.FC<{ uploadPath: string }> = (props) => {
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

export default Upload;

const StyledTitle = styled.h3`
  margin-top: 40px;
`;
