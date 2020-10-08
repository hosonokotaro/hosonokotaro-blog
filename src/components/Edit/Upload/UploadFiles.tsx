import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { publicImages } from '../../../adapter';

const UploadFiles: React.FC<{ uploadPath: string }> = (props) => {
  const filepathRef = useRef<HTMLInputElement>(null);

  const [imageRef, setImageRef] = useState<firebase.storage.Reference[]>([]);

  const [downloadPaths, setDownloadPaths] = useState<string[]>([]);

  // 画像のフルパスと、画像のファイル名のリストが必要
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  const [loaded, setLoaded] = useState(false);

  const copyClipboard = () => {
    if (filepathRef.current) {
      filepathRef.current.select();
      document.execCommand('copy');
    }
  };

  const deleteImage = (imagePath: string) => {
    const deleteConfirm = confirm(`${imagePath}を削除します`);

    if (!deleteConfirm) {
      return false;
    }

    // const fetchPublicImages = () =>
    //   publicImages.child(`${props.uploadPath}/${imagepath}`);

    // desertRef.delete().then(
  };

  useEffect(() => {
    publicImages
      .child(`${props.uploadPath}`)
      .listAll()
      .then((list) => {
        setImageRef(list.items);
      });
  }, [props.uploadPath]);

  useEffect(() => {
    const tmpDownloadPaths: string[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((url) => {
        tmpDownloadPaths.push(url);
      });
    });

    setDownloadPaths(tmpDownloadPaths);
  }, [imageRef]);

  useEffect(() => {
    setImagePaths(downloadPaths);

    const unmount = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [downloadPaths]);

  return (
    <>
      <StyledTitle>画像一覧</StyledTitle>
      <StyledImagePaths>
        {loaded &&
          imagePaths.map((item, index) => {
            return (
              <StyledItem key={index}>
                <StyledFilePath
                  ref={filepathRef}
                  type="text"
                  defaultValue={item}
                />
                <StyledButtonWrap>
                  <button onClick={copyClipboard}>
                    画像パスをクリップボードにコピーする
                  </button>
                  <StyledDeleteButton onClick={() => deleteImage(item)}>
                    画像を削除する
                  </StyledDeleteButton>
                </StyledButtonWrap>
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

const StyledTitle = styled.div`
  margin-top: 40px;
  font-size: 1.6rem;
`;

const StyledImagePaths = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledItem = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 40px;
`;

const StyledFilePath = styled.input`
  display: block;
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledDeleteButton = styled.button`
  color: #f66;

  button + & {
    margin-left: 20px;
  }
`;

const StyledImgWrap = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #eee;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
