import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store/store';
import { render, screen } from '~/testUtil';

import App from './App';

it('it should render: App の article に指定された className が存在する', () => {
  // NOTE: App は index に記載がある通り、Provider で wrap する必要がある
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole('article').getElementsByClassName('s1kml9dm'));
});
