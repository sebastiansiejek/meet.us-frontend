import { render } from '@testing-library/react';
import React from 'react';
import UserEvents, { UserEventsProps } from './UserEvents';

describe('UserEvents', () => {
  const defaultProps: UserEventsProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<UserEvents {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('UserEvents')).toBeTruthy();
  });
});
