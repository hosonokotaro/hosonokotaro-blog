import React, { useState } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';

interface Props {
  uploadPath: string;
}

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
