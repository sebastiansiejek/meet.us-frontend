import { render } from '@testing-library/react';
import React from 'react';
import Register, { RegisterProps } from './Register';

describe('Register', () => {
  const defaultProps: RegisterProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Register {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Register')).toBeTruthy();
  });
});
