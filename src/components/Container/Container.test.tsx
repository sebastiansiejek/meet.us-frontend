import { render } from '@testing-library/react';
import React from 'react';
import Container, { ContainerProps } from './Container';

describe('Container', () => {
  const defaultProps: ContainerProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Container {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Container')).toBeTruthy();
  });
});
