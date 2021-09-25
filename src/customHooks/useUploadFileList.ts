import { useEffect, useState } from 'react';

import { PublicImages, publicImages } from '~/adapter/firebase';

// NOTE: isStorage = false の場合、fullPath は fileName を含んだものを入れることを想定している
export interface ImagePath {
  fullPath: string;
  fileName: string;
}

export interface Params {
  uploadFilePath: string;
  uploadFileName: string;
  isStorage: boolean;
  fileList: ImagePath[];
}

const useUploadFileList = ({
  uploadFilePath = '',
  uploadFileName = '',
  isStorage = true,
  fileList = [],
}: Partial<Params>) => {
  const [imageRef, setImageRef] = useState<PublicImages[]>();
  const [imagePathList, setImagePathList] = useState<ImagePath[]>();
  const [loaded, setLoaded] = useState(false);
  // HACK: Page をリフレッシュするため
  const [reload, setReload] = useState(0);

  const deleteImage = (imagePath: string) => {
    const deleteConfirm = confirm(`${imagePath}を削除します`);

    if (!deleteConfirm || !isStorage) return;

    publicImages
      .child(`${uploadFilePath}/${imagePath}`)
      .delete()
      .then(() => {
        const fixReload = reload + 1;
        setReload(fixReload);
      });
  };

  // NOTE: 指定したディレクトリ配下のファイル一覧を取得する
  useEffect(() => {
    if (!isStorage) return;

    publicImages
      .child(`${uploadFilePath}`)
      .listAll()
      .then((list) => {
        setImageRef(list.items);
      });
  }, [uploadFilePath, uploadFileName, reload, isStorage]);

  useEffect(() => {
    if (!imageRef || !isStorage) return;

    const downloadPath: ImagePath[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((fullPath) => {
        downloadPath.push({ fullPath, fileName: item.name });
      });
    });

    // HACK: await が使えないので、setTimeout を使って処理を遅らせる
    const unmount = setTimeout(() => {
      setImagePathList(downloadPath);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [imageRef, isStorage]);

  // FIXME: 依存関係を見直したい
  useEffect(() => {
    if (isStorage) return;

    setLoaded(true);
    setImagePathList(fileList);
  }, []);

  return { loaded, imagePathList, deleteImage };
};

export default useUploadFileList;
