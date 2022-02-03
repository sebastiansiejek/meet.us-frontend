import { render } from '@testing-library/react';
import React from 'react';
import Logged, { LoggedProps } from './Logged';

describe('Logged', () => {
  const defaultProps: LoggedProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Logged {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Logged')).toBeTruthy();
  });
});
