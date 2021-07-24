import { useEffect, useState } from 'react';

import { PublicImages, publicImages } from '~/adapter/firebase';

export interface TypeImagePath {
  fullpath: string;
  filename: string;
}

export type Props = {
  uploadPath: string;
  uploadFilename: string;
};

const useUploadFileList = ({ uploadPath, uploadFilename }: Props) => {
  const [imageRef, setImageRef] = useState<PublicImages[]>();
  const [imagePathList, setImagePathList] = useState<TypeImagePath[]>();
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
  }, [uploadPath, uploadFilename, reload]);

  useEffect(() => {
    if (!imageRef) return;

    const downloadPath: TypeImagePath[] = [];

    imageRef.map((item) => {
      item.getDownloadURL().then((fullpath) => {
        downloadPath.push({ fullpath, filename: item.name });
      });
    });

    // HACK: await が使えないので、setTimeout を使って処理を遅らせる
    const unmount = setTimeout(() => {
      setImagePathList(downloadPath);
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(unmount);
  }, [imageRef]);

  return { loaded, imagePathList, deleteImage };
};

export default useUploadFileList;
