import { useState } from 'react';

import { publicImages } from '~/adapter/firebase';

export interface Props {
  uploadPath: string;
  setUploadFilename: React.Dispatch<React.SetStateAction<string>>;
}

const useUploadSelectFile = (props: Props) => {
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

export default useUploadSelectFile;
