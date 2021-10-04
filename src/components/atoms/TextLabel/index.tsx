import React from 'react';

type TagName = 'label' | 'span';

interface Props {
  text: string;
  tagName?: TagName;
  htmlFor?: string;
}

const TextLabel: React.VFC<Props> = ({
  text,
  tagName = 'label',
  htmlFor = '',
}) => {
  switch (tagName) {
    case 'span':
      return <span>{text}</span>;
    case 'label':
    default:
      return <label htmlFor={htmlFor}>{text}</label>;
  }
};

export default TextLabel;
