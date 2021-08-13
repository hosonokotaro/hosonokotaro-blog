import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';

const Providers: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  return render(ui, { wrapper: Providers, ...options });
};

const noop = () => null;
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

export * from '@testing-library/react';

export { customRender as render };
