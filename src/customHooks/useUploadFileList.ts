import { useEffect, useState } from 'react';

import { PublicImages, publicImages } from '~/adapter/firebase';

export interface ImagePath {
  fullpath: string;
  filename: string;
}

export interface Params {
  uploadPath: string;
  uploadFileName: string;
}

const useUploadFileList = ({ uploadPath, uploadFileName }: Params) => {
  const [imageRef, setImageRef] = useState<PublicImages[]>();
  const [imagePathList, setImagePathList] = useState<ImagePath[]>();
  const [loaded, setLoaded] = useState(false);
  // HACK: Page をリフレッシュするため
  const [reload, setReload] = useState(0);

  const deleteImage = (imagePath: string) => {
    const deleteConfirm = confirm(`${imagePath}を削除します`);

    if (!deleteConfirm) return;

    publicImages
      .child(`${uploadPath}/${imagePath}`)
      .delete()
      .then(() => {
        const fixReload = reload + 1;
        setReload(fixReload);
      });
  };

  // NOTE: 指定したディレクトリ配下のファイル一覧を取得する
  useEffect(() => {
    publicImages
      .child(`${uploadPath}`)
      .listAll()
      .then((list) => {
        setImageRef(list.items);
      });
  }, [uploadPath, uploadFileName, reload]);

  useEffect(() => {
    if (!imageRef) return;

    const downloadPath: ImagePath[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((fullpath) => {
        downloadPath.push({ fullpath, filename: item.name });
      });
    });

    // HACK: await が使えないので、setTimeout を使って処理を遅らせる
    const unmount = setTimeout(() => {
      setImagePathList(downloadPath);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [imageRef]);

  return { loaded, imagePathList, deleteImage };
};

export default useUploadFileList;
