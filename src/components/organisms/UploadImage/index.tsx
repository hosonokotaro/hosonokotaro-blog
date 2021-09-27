import React, { useState } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';
import useUploadSelectFile from '~/customHooks/useUploadSelectFile';

interface Props {
  uploadPath: string;
}

// TODO: 1. 子コンポーネントに必要な実装をここに持ってくる
// 2. Pages に移動して渡す実装をする

const UploadImage: React.FC<Props> = ({ uploadPath }) => {
  const [uploadFileName, setUploadFileName] = useState<string>('');

  const { image, setImage, handleUpload } = useUploadSelectFile(
    uploadPath,
    setUploadFileName
  );

  return (
    <>
      <ContentBox marginTopSize="40px">
        <Title text="画像" rank="h3" />
      </ContentBox>
      <UploadSelectFile
        image={image}
        callbackSetImage={setImage}
        handleUpload={handleUpload}
      />
      <UploadFileList
        uploadFilePath={uploadPath}
        uploadFileName={uploadFileName}
      />
    </>
  );
};

export default UploadImage;
