import React from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';
import useUploadFileList from '~/customHooks/useUploadFileList';

export type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  documentPath: string;
}

// TODO: Pages に移動して渡す実装をする
const UploadImage: React.FC<Props> = ({ documentPath }) => {
  const { imagePathList, deleteImage, image, setImage, handleUpload } =
    useUploadFileList({
      documentPath,
    });

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
      {imagePathList && (
        <UploadFileList
          imagePathList={imagePathList}
          deleteImage={deleteImage}
        />
      )}
    </>
  );
};

export default UploadImage;
