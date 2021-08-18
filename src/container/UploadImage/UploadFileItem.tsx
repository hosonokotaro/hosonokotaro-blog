import React from 'react';

import useUploadFileItem from '~/customHooks/useUploadFileItem';
import type { ImagePath } from '~/customHooks/useUploadFileList';

import {
  StyledButtonWrap,
  StyledDeleteButton,
  StyledFilePath,
  StyledImg,
  StyledImgWrap,
  StyledItem,
} from './styledUploadFileItem';

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
      <StyledButtonWrap>
        <button onClick={copyClipboard}>
          画像パスをクリップボードにコピーする
        </button>
        <StyledDeleteButton onClick={() => deleteImage(item.filename)}>
          画像を削除する
        </StyledDeleteButton>
      </StyledButtonWrap>
      <StyledImgWrap>
        <StyledImg src={item.fullpath} />
      </StyledImgWrap>
    </StyledItem>
  );
};

export default UploadFileItem;
