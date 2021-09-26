import React from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import LoadingImage from '@/molecules/LoadingImage';
import useUploadFileItem from '~/customHooks/useUploadFileItem';
import type { ImagePath } from '~/customHooks/useUploadFileList';

export interface Props {
  item: ImagePath;
  deleteImage: (imagePath: string) => void;
}

const UploadFileItem: React.FC<Props> = ({ item, deleteImage }) => {
  const { copyClipboard, filepathRef } = useUploadFileItem();

  return (
    <div>
      <InputTextInline
        refObject={filepathRef}
        defaultValue={`![alt](${item.fullPath})`}
      />
      <ContentBox isBetween>
        <Button
          text="画像パスをクリップボードにコピーする"
          handleClick={copyClipboard}
        />
        <Button
          text="画像を削除する"
          handleClick={() => deleteImage(item.fileName)}
          attention
        />
      </ContentBox>
      <ContentBox marginTopSize="20px">
        <LoadingImage src={item.fullPath} />
      </ContentBox>
    </div>
  );
};

export default UploadFileItem;
