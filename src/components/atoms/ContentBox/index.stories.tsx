import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import ContentBox from './';

export default {
  component: ContentBox,
  title: 'components/atoms/ContentBox',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <ContentBox
        isBetween={boolean('isBetween', false)}
        isHalf={boolean('isHalf', false)}
        marginTopSize={select(
          'marginTopSize',
          ['20px', '40px', '80px'],
          '20px'
        )}
      >
        何らかの内容が入ります
      </ContentBox>
      <ContentBox
        isBetween={boolean('isBetween', false)}
        isHalf={boolean('isHalf', false)}
        marginTopSize={select(
          'marginTopSize',
          ['20px', '40px', '80px'],
          '20px'
        )}
      >
        <Item>関心事の単位に</Item>
        <Item>分けることが望ましい使い方です</Item>
      </ContentBox>
    </>
  );
};

const Item = styled.div`
  padding: 20px;
  background: #666;
  color: #fff;
`;
