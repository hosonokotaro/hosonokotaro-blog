import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '../testUtil';
import getYear from '../utility/getYear';
import Footer from './Footer';

it('it should render: Footer', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent(
    `© ${getYear()} HOSONOKOTARO Tech Blog`
  );
});
