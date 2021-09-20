import React from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import useUploadFileItem from '~/customHooks/useUploadFileItem';
import type { ImagePath } from '~/customHooks/useUploadFileList';

import { StyledFilePath, StyledImg, StyledItem } from './styledUploadFileItem';

interface Props {
  item: ImagePath;
  deleteImage: (imagePath: string) => void;
}

const UploadFileItem: React.FC<Props> = ({ item, deleteImage }) => {
  const { copyClipboard, filepathRef } = useUploadFileItem();

  return (
    <StyledItem>
      <StyledFilePath
        ref={filepathRef}
        type="text"
        defaultValue={`![alt](${item.fullpath})`}
      />
      <ContentBox isBetween>
        <Button
          text="画像パスをクリップボードにコピーする"
          onClick={copyClipboard}
        />
        <Button
          text="画像を削除する"
          onClick={() => deleteImage(item.filename)}
          attention
        />
      </ContentBox>
      <ContentBox>
        <StyledImg src={item.fullpath} />
      </ContentBox>
    </StyledItem>
  );
};

export default UploadFileItem;
