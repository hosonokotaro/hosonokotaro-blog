import { Dispatch, SetStateAction, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

export interface Params {
  uploadPath: string;
  setUploadFilename: Dispatch<SetStateAction<string>>;
}

const useUploadSelectFile = ({ uploadPath, setUploadFilename }: Params) => {
  const [image, setImage] = useState<File | null>(null);

  const upload = () => {
    if (!image) return;

    publicImages
      .child(`${uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        setUploadFilename(image.name);
        setImage(null);
      });
  };

  return { image, setImage, upload };
};

export default useUploadSelectFile;
