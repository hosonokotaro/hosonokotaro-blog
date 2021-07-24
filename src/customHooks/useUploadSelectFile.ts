import { Dispatch, SetStateAction, useState } from 'react';

import { publicImages } from '~/adapter/firebase';

export interface Props {
  uploadPath: string;
  setUploadFilename: Dispatch<SetStateAction<string>>;
}

const useUploadSelectFile = (props: Props) => {
  const [image, setImage] = useState<File | null>(null);

  const upload = () => {
    if (!image) return;

    publicImages
      .child(`${props.uploadPath}/${image.name}`)
      .put(image)
      .then(() => {
        props.setUploadFilename(image.name);
        setImage(null);
      });
  };

  return { image, setImage, upload };
};

export default useUploadSelectFile;
