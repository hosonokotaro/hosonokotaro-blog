import React, { useState } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';

interface Props {
  uploadPath: string;
}

const UploadImage: React.FC<Props> = ({ uploadPath }) => {
  const [uploadFileName, setUploadFileName] = useState<string>('');

  return (
    <>
      <ContentBox marginTopSize="40px">
        <Title text="画像" rank="h3" />
      </ContentBox>
      <UploadSelectFile
        uploadPath={uploadPath}
        setUploadFileName={setUploadFileName}
      />
      <UploadFileList
        uploadFilePath={uploadPath}
        uploadFileName={uploadFileName}
      />
    </>
  );
};

export default UploadImage;
