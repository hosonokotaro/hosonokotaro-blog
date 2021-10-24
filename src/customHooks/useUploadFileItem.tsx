import { useCallback, useRef } from 'react';

const useUploadFileItem = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyClipboard = useCallback(() => {
    if (!inputRef.current) return;

    inputRef.current.select();

    const clipBoardText = document.getSelection()?.toString() ?? '';
    navigator.clipboard.writeText(clipBoardText);
  }, []);

  return { copyClipboard, inputRef };
};

export default useUploadFileItem;
