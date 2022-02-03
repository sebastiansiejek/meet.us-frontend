import { render } from '@testing-library/react';
import React from 'react';
import DatePicker, { DatePickerProps } from './DatePicker';

describe('DatePicker', () => {
  const defaultProps: DatePickerProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<DatePicker {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('DatePicker')).toBeTruthy();
  });
});
