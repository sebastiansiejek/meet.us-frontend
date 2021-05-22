import { render } from '@testing-library/react';
import React from 'react';
import Login, { LoginProps } from './Login';

describe('Login', () => {
  const defaultProps: LoginProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Login {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Login')).toBeTruthy();
  });
});
