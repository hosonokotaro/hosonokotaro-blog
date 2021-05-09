import { useState } from 'react';

import { publicImages } from '~/adapter/firebase';

const useUploadFile = (
  props: TypeUploadFile
): [
  File | null,
  React.Dispatch<React.SetStateAction<File | null>>,
  () => false | undefined
] => {
  const [image, setImage] = useState<File | null>(null);

  const upload = () => {
    if (!image) {
      return false;
    }

    publicImages
      .child(`${props.uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        props.setUploadFilename(image.name);
        setImage(null);
      });
  };

  return [image, setImage, upload];
};

export default useUploadFile;

export type TypeUploadFile = {
  uploadPath: string;
  setUploadFilename: React.Dispatch<React.SetStateAction<string>>;
};
