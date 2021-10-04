import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InputCheckBox from './';

export default {
  component: InputCheckBox,
  title: 'components/atoms/InputCheckBox',
  decorators: [withKnobs],
} as Meta;

// FIXME: checked をうまくテスト出来ないので、処理を見直したい
export const Default: React.FC = () => {
  return (
    <InputCheckBox
      id={text('id', 'id')}
      name={text('name', 'name')}
      checked={boolean('checked', false)}
      handleChange={action('state を更新する為に使う')}
    />
  );
};
