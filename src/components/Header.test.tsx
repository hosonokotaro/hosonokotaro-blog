import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

test('Headerの表示を確認する', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByRole('banner'));
});
