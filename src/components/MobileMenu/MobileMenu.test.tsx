import { render } from '@testing-library/react';
import React from 'react';
import MobileMenu, { MobileMenuProps } from './MobileMenu';

describe('MobileMenu', () => {
  const defaultProps: MobileMenuProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<MobileMenu {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('MobileMenu')).toBeTruthy();
  });
});
