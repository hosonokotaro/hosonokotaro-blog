import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InputFile from './';

export default {
  component: InputFile,
  title: 'components/atoms/InputFile',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  return <InputFile handleChange={action('file を選択する為に使う')} />;
};
