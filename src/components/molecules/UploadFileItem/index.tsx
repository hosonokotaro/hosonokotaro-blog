import React, { RefObject } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import LoadingImage from '@/molecules/LoadingImage';

export type ImagePath = {
  fullPath: string;
  fileName: string;
};

export interface Props {
  item: ImagePath;
  deleteImage: (imagePath: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  copyClipboard: VoidFunction;
}

const UploadFileItem: React.FC<Props> = ({
  item,
  deleteImage,
  copyClipboard,
  inputRef,
}) => {
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
