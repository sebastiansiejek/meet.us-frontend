import { render } from '@testing-library/react';
import React from 'react';
import FormOutput, { FormOutputProps } from './FormOutput';

describe('FormOutput', () => {
  const defaultProps: FormOutputProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<FormOutput {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('FormOutput')).toBeTruthy();
  });
});
