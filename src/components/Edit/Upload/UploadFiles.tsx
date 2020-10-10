import React, { useEffect, useRef, useState } from 'react';

import { publicImages } from '../../../adapter';
import Spinner from '../../Spinner';
import {
  StyledButtonWrap,
  StyledDeleteButton,
  StyledFilePath,
  StyledImagePaths,
  StyledImg,
  StyledImgWrap,
  StyledItem,
} from './styled/styledUploadFiles';

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
      <StyledImagePaths>
        {loaded ? (
          imagePaths.map((item, index) => {
            return (
              <StyledItem key={index}>
                <StyledFilePath
                  ref={filepathRef}
                  type="text"
                  defaultValue={`![alt](${item.fullpath})`}
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
