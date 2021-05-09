import React from 'react';

import Spinner from '@/Spinner';
import useUploadFiles, { Props } from '~/customHooks/useUploadFiles';

import {
  StyledButtonWrap,
  StyledDeleteButton,
  StyledFilePath,
  StyledImagePaths,
  StyledImg,
  StyledImgWrap,
  StyledItem,
} from './styledUploadFiles';

const UploadFiles: React.FC<Props> = (props) => {
  const {
    loaded,
    imagePaths,
    filepathRef,
    copyClipboard,
    deleteImage,
  } = useUploadFiles(props);

  return (
    <>
      <StyledImagePaths>
        {loaded ? (
          imagePaths.map((item, index) => {
            return (
              <StyledItem key={index}>
                <StyledFilePath
                  ref={filepathRef}
                  type="text"
                  defaultValue={`![alt](${item.fullpath})`}
                />
                <StyledButtonWrap>
                  <button onClick={copyClipboard}>
                    画像パスをクリップボードにコピーする
                  </button>
                  <StyledDeleteButton
                    onClick={() => deleteImage(item.filename)}
                  >
                    画像を削除する
                  </StyledDeleteButton>
                </StyledButtonWrap>
                <StyledImgWrap>
                  <StyledImg src={item.fullpath} />
                </StyledImgWrap>
              </StyledItem>
            );
          })
        ) : (
          <Spinner />
        )}
      </StyledImagePaths>
    </>
  );
};

export default UploadFiles;
