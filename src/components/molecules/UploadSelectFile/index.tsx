import React, { Dispatch, SetStateAction } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Image from '@/atoms/Image';
import TextBox from '@/atoms/TextBox';

interface Props {
  image: File | null;
  callbackSetImage: Dispatch<SetStateAction<File | null>>;
  handleUpload: VoidFunction;
}

const UploadSelectFile: React.FC<Props> = ({
  image,
  callbackSetImage,
  handleUpload,
}) => {
  return (
    <ContentBox marginTopSize="20px">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files === null) return;
          callbackSetImage(e.target.files[0]);
        }}
      />
      <ContentBox marginTopSize="10px">
        {image && <Image src={window.URL.createObjectURL(image)} />}
        {!image && (
          <TextBox>
            画像を選択してください ※アップロードするとページがリロードされます
          </TextBox>
        )}
      </ContentBox>
      <ContentBox marginTopSize="10px">
        <Button
          text="画像をアップロードする"
          handleClick={handleUpload}
          disabled={image ? false : true}
        />
      </ContentBox>
    </ContentBox>
  );
};

export default UploadSelectFile;
