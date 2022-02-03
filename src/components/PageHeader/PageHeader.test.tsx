import { render } from '@testing-library/react';
import React from 'react';
import PageHeader, { PageHeaderProps } from './PageHeader';

describe('PageHeader', () => {
  const defaultProps: PageHeaderProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<PageHeader {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('PageHeader')).toBeTruthy();
  });
});
