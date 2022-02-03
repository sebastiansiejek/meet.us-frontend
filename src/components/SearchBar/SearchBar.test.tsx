import { render } from '@testing-library/react';
import React from 'react';
import SearchBar, { SearchBarProps } from './SearchBar';

describe('SearchBar', () => {
  const defaultProps: SearchBarProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<SearchBar {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('SearchBar')).toBeTruthy();
  });
});
