import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

export interface Params {
  uploadPath: string;
  callbackSetUploadFileName: Dispatch<SetStateAction<string>>;
}

const useUploadSelectFile = (
  { uploadPath, callbackSetUploadFileName }: Params,
  isStorage = true
) => {
  const [image, setImage] = useState<File | null>(null);

  const handleUpload = () => {
    if (!image || !isStorage) return;

    publicImages
      .child(`${uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        callbackSetUploadFileName(image.name);
        setImage(null);
      });
  };

  useEffect(() => {
    if (!image || isStorage) return;

    callbackSetUploadFileName(image.name);
  }, [isStorage, image, callbackSetUploadFileName]);

  return { image, setImage, handleUpload };
};

export default useUploadSelectFile;
