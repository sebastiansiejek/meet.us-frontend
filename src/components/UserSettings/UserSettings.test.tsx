import { render } from '@testing-library/react';
import React from 'react';
import UserSettings, { UserSettingsProps } from './UserSettings';

describe('UserSettings', () => {
  const defaultProps: UserSettingsProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<UserSettings {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('UserSettings')).toBeTruthy();
  });
});
