import React, { useState } from 'react';

import { publicImages } from '../../../adapter';
import {
  StyledButton,
  StyledInputImage,
  StyledInputInfo,
  StyledUploadFile,
} from './styled/styledUploadFile';

const UploadFile: React.FC<{
  uploadPath: string;
  setUploadFilename: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const [image, setImage] = useState<File | null>(null);

  const upload = () => {
    if (!image) {
      return false;
    }

    publicImages
      .child(`${props.uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        props.setUploadFilename(image.name);
        setImage(null);
      });
  };

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
