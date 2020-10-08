import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { publicImages } from '../../../adapter';

const UploadFiles: React.FC<{ uploadPath: string }> = (props) => {
  const filepathRef = useRef<HTMLInputElement>(null);

  // 画像のフルパスと、画像のファイル名のリストが必要
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  const copyClipboard = () => {
    if (filepathRef.current) {
      filepathRef.current.select();
      document.execCommand('copy');
    }
  };

  const deleteImage = (imagePath: string) => {
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return false;
    }

    // const fetchPublicImages = () =>
    //   publicImages.child(`${props.uploadPath}/${imagepath}`);

    // desertRef.delete().then(
  };

  useEffect(() => {
    const tmpImagePaths: string[] = [];

    const fetchPublicImages = () =>
      publicImages
        .child(`${props.uploadPath}`)
        .listAll()
        .then(({ items }) => {
          items.map((item) => {
            item.getDownloadURL().then((url) => {
              tmpImagePaths.push(url);
            });
          });

          setImagePaths(tmpImagePaths);
        });

    fetchPublicImages();
  }, []);

  return (
    <>
      <div>画像一覧</div>
      <StyledImagePaths>
        {imagePaths.map((item, index) => {
          return (
            <StyledItem key={index}>
              <input ref={filepathRef} type="text" defaultValue={item} />
              <button onClick={copyClipboard}>
                画像パスをクリップボードにコピーする
              </button>
              <button onClick={() => deleteImage(item)}>画像を削除する</button>
              <StyledImgWrap>
                <StyledImg src={item} />
              </StyledImgWrap>
            </StyledItem>
          );
        })}
      </StyledImagePaths>
    </>
  );
};

export default UploadFiles;

const StyledImagePaths = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledItem = styled.div`
  width: 50%;
`;

const StyledImgWrap = styled.div`
  text-align: center;
  background-color: #eee;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
