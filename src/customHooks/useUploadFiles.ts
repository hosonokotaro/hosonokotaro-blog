import { RefObject, useEffect, useRef, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

const useUploadFiles = (
  props: TypeUploadFiles
): [
  boolean,
  TypeImagePath[],
  RefObject<HTMLInputElement>,
  () => void,
  (imagePath: string) => void
] => {
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

    if (!deleteConfirm) return;

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

  return [loaded, imagePaths, filepathRef, copyClipboard, deleteImage];
};

export default useUploadFiles;

type TypeImagePath = {
  fullpath: string;
  filename: string;
};

export type TypeUploadFiles = {
  uploadPath: string;
  uploadFilename: string;
};
