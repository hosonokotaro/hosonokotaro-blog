import { useRef } from 'react';

const useUploadFileItem = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyClipboard = () => {
    if (!inputRef.current) return;

    inputRef.current.select();
    document.execCommand('copy');
  };

  return { copyClipboard, inputRef };
};

export default useUploadFileItem;
