import { useEffect, useState } from 'react';

import type { PublicImages } from '~/adapter/firebase';
import { publicImages } from '~/adapter/firebase';

// NOTE: isStorage = false の場合、fullPath は fileName を含んだものを入れることを想定している
export interface ImagePath {
  fullPath: string;
  fileName: string;
}

const useUploadFileList = (documentPath = '') => {
  const [imageRef, setImageRef] = useState<PublicImages[]>();
  const [imagePathList, setImagePathList] = useState<ImagePath[]>();
  const [image, setImage] = useState<File | null>(null);
  // HACK: useEffect を発火させてファイル一覧を再取得するため
  const [reload, setReload] = useState(0);

  const deleteImage = (fileName: string) => {
    const deleteConfirm = confirm(`${fileName}を削除します`);

    if (!deleteConfirm) return;

    publicImages
      .child(`${documentPath}/${fileName}`)
      .delete()
      .then(() => {
        setReload(() => reload + 1);
      });
  };

  const handleUpload = () => {
    if (!image) return;

    publicImages
      .child(`${documentPath}/${image.name}`)
      .put(image)
      .then(() => {
        setImage(null);
        setReload(() => reload + 1);
      });
  };

  useEffect(() => {
    publicImages
      .child(`${documentPath}`)
      .listAll()
      .then((list) => {
        setImageRef(list.items);
      });
  }, [documentPath, reload]);

  useEffect(() => {
    if (!imageRef) return;

    const downloadPath: ImagePath[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((fullPath) => {
        downloadPath.push({ fullPath, fileName: item.name });
      });
    });

    // HACK: await が使えないので、setTimeout を使って処理を遅らせる
    const unmount = setTimeout(() => {
      setImagePathList(downloadPath);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [imageRef]);

  return { imagePathList, deleteImage, image, setImage, handleUpload };
};

export default useUploadFileList;
