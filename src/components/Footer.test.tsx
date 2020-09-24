import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

test('Footerの表示を確認する', () => {
  render(<Footer />);

  expect(screen.getByRole('contentinfo'));
});
