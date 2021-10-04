import React from 'react';

import ContentBox from '@/atoms/ContentBox';
import UploadFileItem from '@/molecules/UploadFileItem';

import { ItemWrapper } from './styledIndex';

export type ImagePath = {
  fullPath: string;
  fileName: string;
};

export interface Props {
  imagePathList: ImagePath[];
  deleteImage: (fileName: string) => void;
}

const UploadFileList: React.FC<Props> = ({ imagePathList, deleteImage }) => {
  return (
    <>
      <ContentBox isBetween>
        {imagePathList.map((item, index) => {
          return (
            <ItemWrapper key={index}>
              <UploadFileItem item={item} deleteImage={deleteImage} />
            </ItemWrapper>
          );
        })}
      </ContentBox>
    </>
  );
};

export default UploadFileList;
