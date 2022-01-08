import { render } from '@testing-library/react';
import React from 'react';
import Calendar, { CalendarProps } from './Calendar';

describe('Calendar', () => {
  const defaultProps: CalendarProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Calendar {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Calendar')).toBeTruthy();
  });
});
