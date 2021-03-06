import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '~/testUtil';

import Header from '.';

it('it should render: Header の heading に指定した文字列が存在する', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(
    'HOSONOKOTARO Tech Blog'
  );
});

it('it should render: Header link path が指定通りのものか', () => {
  const testPath = '/edit';

  render(
    <Router>
      <Header linkPath={testPath} />
    </Router>
  );

  expect(screen.getByRole('link').getAttribute('href')).toBe(testPath);
});
