import type { StorageReference } from 'firebase/storage';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';

import { firebaseApp } from '~/adapter/firebase';

const storageFix = getStorage(firebaseApp);

// NOTE: image に関しては固定のルートパスのようなものを設定している
const getReference = (path: string) => {
  return ref(storageFix, `public/images/${path}`);
};

const getReferenceList = async (reference: StorageReference) => {
  const list = await listAll(reference);
  return list;
};

const uploadFile = async (reference: StorageReference, file: File) => {
  await uploadBytes(reference, file);
};

const getFileURL = async (reference: StorageReference) => {
  const url = await getDownloadURL(reference);
  return url;
};

const deleteFile = async (reference: StorageReference) => {
  await deleteObject(reference);
};

export { deleteFile, getFileURL, getReference, getReferenceList, uploadFile };
