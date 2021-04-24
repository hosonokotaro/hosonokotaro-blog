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
