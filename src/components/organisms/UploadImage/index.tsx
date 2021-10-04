import React, { Dispatch, SetStateAction } from 'react';

import Title from '@/atoms/Title';
import UploadFileList from '@/molecules/UploadFileList';
import UploadSelectFile from '@/molecules/UploadSelectFile';
import type { ImagePath } from '~/customHooks/useUploadFileList';

interface Props {
  imagePathList: ImagePath[];
  deleteImage: (fileName: string) => void;
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: VoidFunction;
}

const UploadImage: React.FC<Props> = ({
  imagePathList,
  deleteImage,
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <>
      <Title text="画像" rank="h3" />
      <UploadSelectFile
        image={image}
        callbackSetImage={callbackSetImage}
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
