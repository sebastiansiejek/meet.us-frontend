import { render } from '@testing-library/react';
import React from 'react';
import TimePicker, { TimePickerProps } from './TimePicker';

describe('TimePicker', () => {
  const defaultProps: TimePickerProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<TimePicker {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('TimePicker')).toBeTruthy();
  });
});
