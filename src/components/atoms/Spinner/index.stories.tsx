import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Spinner from './';

export default {
  component: Spinner,
  title: 'components/atoms/Spinner',
} as Meta;

type Props = ComponentProps<typeof Spinner>;

const Template: Story<Props> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
