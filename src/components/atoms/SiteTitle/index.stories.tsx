import { Meta } from '@storybook/react';
import React from 'react';

import SiteTitle from './';

export default {
  component: SiteTitle,
  title: 'components/atoms/SiteTitle',
} as Meta;

export const Default: React.FC = () => <SiteTitle />;
