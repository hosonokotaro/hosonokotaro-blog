import React, { useState } from 'react';

import { StyledTitle } from './styledUploadImageList';
import UploadFileList from './UploadFileList';
import UploadSelectFile from './UploadSelectFile';

const UploadImage: React.FC<{ uploadPath: string }> = (props) => {
  const [uploadFilename, setUploadFilename] = useState<string>('');

  return (
    <>
      <StyledTitle>画像</StyledTitle>
      <UploadSelectFile
        uploadPath={props.uploadPath}
        setUploadFilename={setUploadFilename}
      />
      <UploadFileList
        uploadPath={props.uploadPath}
        uploadFilename={uploadFilename}
      />
    </>
  );
};

export default UploadImage;
