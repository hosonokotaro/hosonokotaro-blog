import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import EditPostList from './';

export default {
  component: EditPostList,
  title: 'components/organisms/EditPostList',
} as Meta;

type Props = ComponentProps<typeof EditPostList>;

const Template: Story<Props> = (args) => {
  return (
    <MemoryRouter>
      <EditPostList {...args} />
    </MemoryRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  postList: [
    {
      id: 'sdkkCvuFVYCgG0Ge7CAQ',
      title: 'ReactからCloud Storageを利用する',
      release: true,
      createDate: '2020年10月9日 17:27',
    },
    {
      id: '41RgvZX9IbGF1STpvGUU',
      title: 'Reactでシンタックスハイライトを導入する',
      release: true,
      createDate: '2020年9月26日 16:55',
    },
    {
      id: 'YrtBam2iH0XUNB4ucQVU',
      title: 'ブログをリリースしました',
      release: true,
      createDate: '2020年9月12日 20:32',
    },
  ],
};
