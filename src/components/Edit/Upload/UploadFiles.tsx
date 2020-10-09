import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { publicImages } from '../../../adapter';
import Spinner from '../../Spinner';

type TypeImagePath = {
  fullpath: string;
  filename: string;
};

const UploadFiles: React.FC<{
  uploadPath: string;
  uploadFilename: string;
}> = (props) => {
  const filepathRef = useRef<HTMLInputElement>(null);

  const [imageRef, setImageRef] = useState<firebase.storage.Reference[]>([]);
  const [imagePaths, setImagePaths] = useState<TypeImagePath[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [reload, setReload] = useState(0);

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

    publicImages
      .child(`${props.uploadPath}/${imagePath}`)
      .delete()
      .then(() => {
        confirm(`${imagePath}を削除しました`);

        const fixReload = reload + 1;
        setReload(fixReload);
      });
  };

  useEffect(() => {
    publicImages
      .child(`${props.uploadPath}`)
      .listAll()
      .then((list) => {
        setImageRef(list.items);
      });
  }, [props.uploadPath, props.uploadFilename, reload]);

  useEffect(() => {
    const downloadPath: TypeImagePath[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((fullpath) => {
        downloadPath.push({ fullpath, filename: item.name });
      });
    });

    const unmount = setTimeout(() => {
      setImagePaths(downloadPath);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [imageRef]);

  return (
    <>
      <StyledTitle>画像一覧</StyledTitle>
      <StyledImagePaths>
        {loaded ? (
          imagePaths.map((item, index) => {
            return (
              <StyledItem key={index}>
                <StyledFilePath
                  ref={filepathRef}
                  type="text"
                  defaultValue={item.fullpath}
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
