import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

jest.mock('@linaria/react', () => {
  const styled = (tag: any) => {
    return jest.fn(() => `${tag}`);
  };

  return {
    styled: new Proxy(styled, {
      get(o, prop) {
        return o(prop);
      },
    }),
  };
});

it('it should render: Footer', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent(
    '© 2021 HOSONOKOTARO Tech Blog'
  );
});
