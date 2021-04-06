import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '~/testUtil';

import CodeBlock from './CodeBlock';

const language = 'tsx';

it('it should render: CodeBlock に tsx を指定した時に期待する Style が存在する', () => {
  render(<CodeBlock value="" language={language} />);

  expect(screen.getByRole('img')).toHaveStyle('color: rgb(204, 204, 204)');
});
