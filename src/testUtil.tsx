import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const Providers: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement, options?: any): RenderResult => {
  return render(ui, { wrapper: Providers, ...options });
};

const noop = () => null;
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

export * from '@testing-library/react';

export { customRender as render };
