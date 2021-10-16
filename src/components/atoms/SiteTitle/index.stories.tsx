import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import SiteTitle from './';

export default {
  component: SiteTitle,
  title: 'components/atoms/SiteTitle',
} as Meta;

type Props = ComponentProps<typeof SiteTitle>;

const Template: Story<Props> = (args) => <SiteTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  text1: 'HOSONO',
  text2: 'KOTARO',
  text3: 'Tech Blog',
};
