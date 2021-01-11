import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import store from '../store';
import { render, screen } from '../testUtil';
import Pages from './Pages';

it('it should render: Pages に Edit 画面の「ログインする」ボタンが表示される', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/edit']}>
        <Pages />
      </MemoryRouter>
    </Provider>
  );

  expect(await screen.findByRole('button')).toHaveTextContent('ログインする');
});
