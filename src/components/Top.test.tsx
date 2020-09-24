import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Top from './Top';

test('Topの表示を確認する', () => {
  render(<Top />);

  expect(screen.getByRole('article'));
});
