import React from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';
import useUploadFileList from '~/customHooks/useUploadFileList';
import useUploadSelectFile from '~/customHooks/useUploadSelectFile';

export type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  documentPath: string;
  // imagePathList: ImagePath[];
  // deleteImage: (imagePath: string) => void;
}

// TODO: Pages に移動して渡す実装をする

const UploadImage: React.FC<Props> = ({ documentPath }) => {
  // TODO: custom hooks の依存関係が整理されていないので、再度統合して分割する
  const { image, setImage, handleUpload, uploadFileName } =
    useUploadSelectFile(documentPath);

  const { imagePathList, deleteImage } = useUploadFileList({
    uploadFilePath: documentPath,
    uploadFileName,
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
