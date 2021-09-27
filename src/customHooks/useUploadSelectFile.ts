import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

const useUploadSelectFile = (
  uploadPath: string,
  callbackSetUploadFileName: Dispatch<SetStateAction<string>>,
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
