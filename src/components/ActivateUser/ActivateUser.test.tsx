import { render } from '@testing-library/react';
import React from 'react';
import ActivateUser, { ActivateUserProps } from './ActivateUser';

describe('ActivateUser', () => {
  const defaultProps: ActivateUserProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<ActivateUser {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('ActivateUser')).toBeTruthy();
  });
});
