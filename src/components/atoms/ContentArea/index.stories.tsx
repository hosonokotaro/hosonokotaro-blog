import { select, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import ContentArea from './';

export default {
  component: ContentArea,
  title: 'components/atoms/ContentArea',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <ContentArea
    tag={select('tag', ['div', 'article', 'section'], 'div')}
    marginTopSize={select('marginTopSize', ['20px', '40px', '80px'], '40px')}
  >
    <div>children</div>
  </ContentArea>
);
