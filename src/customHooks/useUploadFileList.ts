import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  deleteFile,
  getFileURL,
  getReference,
  getReferenceList,
  uploadFile,
} from '~/services/storage';

// NOTE: isStorage = false の場合、fullPath は fileName を含んだものを入れることを想定している
export interface ImagePath {
  fullPath: string;
  fileName: string;
}

const useUploadFileList = (documentPath = '') => {
  const [imagePathList, setImagePathList] = useState<ImagePath[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // HACK: upload 動作が他のサーバーとの通信のため、page を reload しないといけない
  const history = useHistory();

  const deleteImage = useCallback(
    (fileName: string) => {
      if (!confirm(`${fileName}を削除します`)) return;

      deleteFile(getReference(`${documentPath}/${fileName}`)).then(() => {
        history.go(0);
      });
    },
    [documentPath, history]
  );

  const handleUpload = useCallback(() => {
    if (!imageFile) return;

    uploadFile(
      getReference(`${documentPath}/${imageFile.name}`),
      imageFile
    ).then(() => {
      history.go(0);
    });
  }, [documentPath, history, imageFile]);

  const getReferenceListCallback = useCallback(async () => {
    await getReferenceList(getReference(`${documentPath}`)).then(
      ({ items }) => {
        const tempImagePathList: ImagePath[] = [];

        items.map((referense) => {
          getFileURL(referense).then((fullPath) => {
            tempImagePathList.push({ fullPath, fileName: referense.name });
          });

          setImagePathList(tempImagePathList);
        });
      }
    );
  }, [documentPath]);

  useEffect(() => {
    getReferenceListCallback();
  }, [getReferenceListCallback]);

  return { imagePathList, deleteImage, imageFile, setImageFile, handleUpload };
};

export default useUploadFileList;
