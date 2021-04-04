import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '~/testUtil';
import getDate from '~/utility/getDate';

import Footer from './Footer';

it('it should render: Footer', () => {
  render(<Footer year={getDate('year')} />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent(
    `© ${getDate('year')} HOSONOKOTARO Tech Blog`
  );
});
