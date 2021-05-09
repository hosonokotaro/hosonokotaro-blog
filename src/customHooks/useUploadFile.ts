import { useState } from 'react';

import { publicImages } from '~/adapter/firebase';

const useUploadFile = (
  props: TypeUploadFile
): {
  image?: File;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  upload: VoidFunction;
} => {
  const [image, setImage] = useState<File>();

  const upload = () => {
    if (!image) return;

    publicImages
      .child(`${props.uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        props.setUploadFilename(image.name);
        setImage(undefined);
      });
  };

  return { image, setImage, upload };
};

export default useUploadFile;

export type TypeUploadFile = {
  uploadPath: string;
  setUploadFilename: React.Dispatch<React.SetStateAction<string>>;
};
