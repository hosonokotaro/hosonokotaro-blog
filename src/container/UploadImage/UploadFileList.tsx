import React from 'react';

import Spinner from '@/atoms/Spinner';
import useUploadFileList, {
  Params as Props,
} from '~/customHooks/useUploadFileList';

import { StyledImagePaths } from './styledUploadFileList';
import UploadFileItem from './UploadFileItem';

const UploadFileList: React.FC<Props> = (props) => {
  const { loaded, imagePathList, deleteImage } = useUploadFileList(props);

  return (
    <>
      <StyledImagePaths>
        {loaded &&
          imagePathList &&
          imagePathList.map((item, index) => {
            return (
              <UploadFileItem
                key={index}
                item={item}
                deleteImage={deleteImage}
              />
            );
          })}
        {!loaded && <Spinner />}
      </StyledImagePaths>
    </>
  );
};

export default UploadFileList;
