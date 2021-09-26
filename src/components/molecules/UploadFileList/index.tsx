import React from 'react';

import ContentBox from '@/atoms/ContentBox';
import Spinner from '@/atoms/Spinner';
import UploadFileItem from '@/molecules/UploadFileItem';
import useUploadFileList, {
  Params as Props,
} from '~/customHooks/useUploadFileList';

import { ItemWrapper } from './styledIndex';

export type { Props };

const UploadFileList: React.FC<Partial<Props>> = (uploadFile) => {
  const { loaded, imagePathList, deleteImage } = useUploadFileList(uploadFile);

  return (
    <>
      <ContentBox isBetween>
        {loaded &&
          imagePathList &&
          imagePathList.map((item, index) => {
            return (
              <ItemWrapper key={index}>
                <UploadFileItem item={item} deleteImage={deleteImage} />
              </ItemWrapper>
            );
          })}
      </ContentBox>
      {!loaded && <Spinner />}
    </>
  );
};

export default UploadFileList;
