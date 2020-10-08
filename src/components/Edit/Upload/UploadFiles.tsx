import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const UploadFiles: React.FC<{ uploadPath: string }> = (props) => {
  const filepathRef = useRef<HTMLInputElement>(null);

  const copyClipboard = () => {
    if (filepathRef.current) {
      filepathRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>
      <div>画像一覧</div>
      <div>
        <input ref={filepathRef} type="text" defaultValue="filepath" />
        <button onClick={copyClipboard}>
          画像パスをクリップボードにコピーする
        </button>
        <div>
          <img src="http://placehold.jp/150x150.png" />
        </div>
      </div>
    </>
  );
};

export default UploadFiles;
