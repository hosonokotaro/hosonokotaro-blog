import React, { useEffect, useState } from 'react';

import ContentBox from '@/atoms/ContentBox';
import UploadFileItem from '@/molecules/UploadFileItem';

import { ItemWrapper } from './styledIndex';

type ImagePath = {
  fullPath: string;
  fileName: string;
};

interface Props {
  imagePathList: ImagePath[];
  deleteImage: (fileName: string) => void;
}

const UploadFileList: React.FC<Props> = ({ imagePathList, deleteImage }) => {
  const [isShow, setIsShow] = useState(false);

  // HACK: imagePathList が取得できているのにも関わらずレンダリングがされないので、仕方なく wait をかけてレンダリングを遅らせている
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 300);
  }, []);

  return (
    <ContentBox isBetween>
      {isShow &&
        imagePathList.map((item, index) => {
          return (
            <ItemWrapper key={index}>
              <UploadFileItem item={item} deleteImage={deleteImage} />
            </ItemWrapper>
          );
        })}
    </ContentBox>
  );
};

export default UploadFileList;
