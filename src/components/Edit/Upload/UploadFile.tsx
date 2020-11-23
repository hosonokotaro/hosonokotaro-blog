import React from 'react';

import {
  StyledButton,
  StyledInputImage,
  StyledInputInfo,
  StyledUploadFile,
} from './styledUploadFile';
import useUploadFile, { TypeUploadFile } from './useUploadFile';

const UploadFile: React.FC<TypeUploadFile> = (props) => {
  const [image, setImage, upload] = useUploadFile(props);

  return (
    <StyledUploadFile>
      <input
        type="file"
        onChange={(e) => (e.target.files ? setImage(e.target.files[0]) : null)}
      />
      <StyledInputInfo>
        {image ? (
          <StyledInputImage src={window.URL.createObjectURL(image)} />
        ) : (
          <span>画像を選択してください</span>
        )}
      </StyledInputInfo>
      <StyledButton onClick={upload} disabled={image ? false : true}>
        画像をアップロードする
      </StyledButton>
    </StyledUploadFile>
  );
};

export default UploadFile;
