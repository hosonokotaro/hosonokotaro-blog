import React from 'react';

import useUploadSelectFile, { Params } from '~/customHooks/useUploadSelectFile';

import {
  StyledButton,
  StyledInputImage,
  StyledInputInfo,
  StyledUploadFile,
} from './styledIndex';

interface Props {
  selectFile: Params;
  isStorage?: boolean;
  handleUpload?: VoidFunction;
}

const UploadSelectFile: React.FC<Props> = ({
  selectFile,
  isStorage = true,
  handleUpload,
}) => {
  const {
    image,
    setImage,
    handleUpload: handleUploadSelectFile,
  } = useUploadSelectFile(selectFile, isStorage);

  return (
    <StyledUploadFile>
      <input
        type="file"
        onChange={(e) => (e.target.files ? setImage(e.target.files[0]) : null)}
      />
      <StyledInputInfo>
        {image && <StyledInputImage src={window.URL.createObjectURL(image)} />}
        {!image && <span>画像を選択してください</span>}
      </StyledInputInfo>
      <StyledButton
        onClick={handleUpload ? handleUpload : handleUploadSelectFile}
        disabled={image ? false : true}
      >
        画像をアップロードする
      </StyledButton>
    </StyledUploadFile>
  );
};

export default UploadSelectFile;
