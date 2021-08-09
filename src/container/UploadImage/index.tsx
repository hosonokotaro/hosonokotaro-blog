import React, { useState } from 'react';

import Title from '@/atoms/Title';

import UploadFileList from './UploadFileList';
import UploadSelectFile from './UploadSelectFile';

interface Props {
  uploadPath: string;
}

const UploadImage: React.FC<Props> = ({ uploadPath }) => {
  const [uploadFilename, setUploadFilename] = useState<string>('');

  return (
    <>
      <Title text="画像" rank="h3" isMargin />
      <UploadSelectFile
        uploadPath={uploadPath}
        setUploadFilename={setUploadFilename}
      />
      <UploadFileList uploadPath={uploadPath} uploadFilename={uploadFilename} />
    </>
  );
};

export default UploadImage;
