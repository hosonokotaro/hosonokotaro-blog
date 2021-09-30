import { useEffect, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

const useUploadSelectFile = (documentPath: string, isStorage = true) => {
  const [image, setImage] = useState<File | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string>('');

  const handleUpload = () => {
    if (!image || !isStorage) return;

    publicImages
      .child(`${documentPath}/${image.name}`)
      .put(image)
      .then(() => {
        setUploadFileName(image.name);
        setImage(null);
      });
  };

  useEffect(() => {
    if (!image || isStorage) return;

    setUploadFileName(image.name);
  }, [isStorage, image, setUploadFileName]);

  return { image, setImage, handleUpload, uploadFileName };
};

export default useUploadSelectFile;
