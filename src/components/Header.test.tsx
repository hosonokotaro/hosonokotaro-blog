import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

test('Headerの表示を確認する', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByRole('banner'));
});
