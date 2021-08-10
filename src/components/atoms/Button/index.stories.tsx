import { Meta } from '@storybook/react';
import React from 'react';

import Button from './';

export default {
  component: Button,
  title: 'components/atoms/Button',
  argTypes: {
    buttonText: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

// text,
// onClick,
// disabled = false,
// isMargin = false,

export const Default: React.FC = () => (
  <Button text="Default" onClick={() => null} />
);
