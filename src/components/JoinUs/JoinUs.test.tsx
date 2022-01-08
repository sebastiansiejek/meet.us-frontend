import { render } from '@testing-library/react';
import React from 'react';
import JoinUs, { JoinUsProps } from './JoinUs';

describe('JoinUs', () => {
  const defaultProps: JoinUsProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<JoinUs {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('JoinUs')).toBeTruthy();
  });
});
