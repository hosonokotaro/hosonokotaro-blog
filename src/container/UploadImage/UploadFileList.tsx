import React from 'react';

import Spinner from '@/Spinner';
import useUploadFileList, { Props } from '~/customHooks/useUploadFileList';

import { StyledImagePaths } from './styledUploadFileList';
import UploadFileItem from './UploadFileItem';

const UploadFileList: React.FC<Props> = (props) => {
  const { loaded, imagePathList, deleteImage } = useUploadFileList(props);

  return (
    <>
      <StyledImagePaths>
        {loaded ? (
          imagePathList &&
          imagePathList.map((item, index) => (
            <UploadFileItem key={index} item={item} deleteImage={deleteImage} />
          ))
        ) : (
          <Spinner />
        )}
      </StyledImagePaths>
    </>
  );
};

export default UploadFileList;
