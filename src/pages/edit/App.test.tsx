import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '~/testUtil';

import App from './App';

it('it should render: Edit の App に link が存在する', () => {
  // NOTE: App は index に記載がある通り、Provider で wrap する必要がある
  render(<App />);

  expect(screen.getByRole('link'));
});
