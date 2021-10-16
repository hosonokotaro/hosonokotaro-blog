import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Footer from './';

export default {
  component: Footer,
  title: 'components/atoms/Footer',
} as Meta;

type Props = ComponentProps<typeof Footer>;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  year: '2021',
};
