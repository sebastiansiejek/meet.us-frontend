import { render } from '@testing-library/react';
import React from 'react';
import UsersCard, { UsersCardProps } from './UsersCard';

describe('UsersCard', () => {
  const defaultProps: UsersCardProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<UsersCard {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('UsersCard')).toBeTruthy();
  });
});
