import React, { useState } from 'react';
import styled from 'styled-components';

import { publicImages } from '../../adapter';

const UploadFile: React.FC<{ uploadPath: string }> = (props) => {
  const [image, setImage] = useState<File | null>(null);

  const upload = () => {
    if (!image) {
      return false;
    }

    publicImages
      .child(`${props.uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
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
          <span>ファイルを選択してください</span>
        )}
      </StyledInputInfo>
      <StyledButton onClick={upload} disabled={image ? false : true}>
        アップロード
      </StyledButton>
    </StyledUploadFile>
  );
};

export default UploadFile;

const StyledUploadFile = styled.div`
  margin-top: 20px;
`;

const StyledInputInfo = styled.div`
  margin-top: 10px;
`;

const StyledInputImage = styled.img`
  max-width: 50%;
`;

const StyledButton = styled.button`
  margin-top: 10px;
`;
