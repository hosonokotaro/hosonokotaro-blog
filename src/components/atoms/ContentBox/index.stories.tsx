import { Meta } from '@storybook/react';
import React from 'react';

import ContentBox from './';

export default {
  component: ContentBox,
  title: 'components/atoms/ContentBox',
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <ContentBox>何らかの内容が入ります</ContentBox>
      <ContentBox>関心事の単位に分けることが望ましい使い方です</ContentBox>
    </>
  );
};
