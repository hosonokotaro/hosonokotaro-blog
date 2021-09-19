import React, { useState } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';

import UploadFileList from './UploadFileList';
import UploadSelectFile from './UploadSelectFile';

interface Props {
  uploadPath: string;
}

// FIXME: 従属する component を分類したい
const UploadImage: React.FC<Props> = ({ uploadPath }) => {
  const [uploadFilename, setUploadFilename] = useState<string>('');

  return (
    <>
      <ContentBox marginTopSize="40px">
        <Title text="画像" rank="h3" />
      </ContentBox>
      <UploadSelectFile
        uploadPath={uploadPath}
        setUploadFilename={setUploadFilename}
      />
      <UploadFileList uploadPath={uploadPath} uploadFilename={uploadFilename} />
    </>
  );
};

export default UploadImage;
