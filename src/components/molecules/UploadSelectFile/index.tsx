import React, { Dispatch, SetStateAction } from 'react';

import {
  StyledButton,
  StyledInputImage,
  StyledInputInfo,
  StyledUploadFile,
} from './styledIndex';

interface Props {
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload?: VoidFunction;
}

const UploadSelectFile: React.FC<Props> = ({
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <StyledUploadFile>
      <input
        type="file"
        onChange={(e) =>
          e.target.files ? callbackSetImage(e.target.files[0]) : null
        }
      />
      <StyledInputInfo>
        {image && <StyledInputImage src={window.URL.createObjectURL(image)} />}
        {!image && <span>画像を選択してください</span>}
      </StyledInputInfo>
      <StyledButton onClick={handleUpload} disabled={image ? false : true}>
        画像をアップロードする
      </StyledButton>
    </StyledUploadFile>
  );
};

export default UploadSelectFile;
