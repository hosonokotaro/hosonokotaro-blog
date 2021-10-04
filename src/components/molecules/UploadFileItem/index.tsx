import React from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import LoadingImage from '@/molecules/LoadingImage';
import useUploadFileItem from '~/customHooks/useUploadFileItem';

export type ImagePath = {
  fullPath: string;
  fileName: string;
};

export interface Props {
  item: ImagePath;
  deleteImage: (fileName: string) => void;
}

const UploadFileItem: React.FC<Props> = ({ item, deleteImage }) => {
  // NOTE: この DOM 操作は、自身の component 内で完結する
  const { copyClipboard, inputRef } = useUploadFileItem();

  return (
    <div>
      <InputTextInline
        refObject={inputRef}
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
