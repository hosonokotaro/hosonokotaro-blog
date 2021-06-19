import { useRef } from 'react';

const useUploadFileItem = () => {
  const filepathRef = useRef<HTMLInputElement>(null);

  const copyClipboard = () => {
    if (!filepathRef.current) return;

    filepathRef.current.select();
    document.execCommand('copy');
  };

  return { copyClipboard, filepathRef };
};

export default useUploadFileItem;
