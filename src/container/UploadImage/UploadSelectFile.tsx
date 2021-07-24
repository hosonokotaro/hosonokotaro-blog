import React from 'react';

import useUploadSelectFile, { Props } from '~/customHooks/useUploadSelectFile';

import {
  StyledButton,
  StyledInputImage,
  StyledInputInfo,
  StyledUploadFile,
} from './styledUploadSelectFile';

const UploadSelectFile: React.FC<Props> = (props) => {
  const { image, setImage, upload } = useUploadSelectFile(props);

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
      <StyledButton onClick={upload} disabled={image ? false : true}>
        画像をアップロードする
      </StyledButton>
    </StyledUploadFile>
  );
};

export default UploadSelectFile;
