import React from 'react';

interface Props {
  children: React.ReactNode;
}

const TextList: React.VFC<Props> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default TextList;
