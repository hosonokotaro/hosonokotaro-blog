import React, { useState } from 'react';

import { StyledTitle } from './styledUploadImageList';
import UploadFileList from './UploadFileList';
import UploadSelectFile from './UploadSelectFile';

interface Props {
  uploadPath: string;
}

const UploadImage: React.FC<Props> = ({ uploadPath }) => {
  const [uploadFilename, setUploadFilename] = useState<string>('');

  return (
    <>
      <StyledTitle>画像</StyledTitle>
      <UploadSelectFile
        uploadPath={uploadPath}
        setUploadFilename={setUploadFilename}
      />
      <UploadFileList uploadPath={uploadPath} uploadFilename={uploadFilename} />
    </>
  );
};

export default UploadImage;
