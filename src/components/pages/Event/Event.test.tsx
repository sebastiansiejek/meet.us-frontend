import { render } from '@testing-library/react';
import React from 'react';
import Event, { EventProps } from './Event';

describe('Event', () => {
  const defaultProps: EventProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Event {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Event')).toBeTruthy();
  });
});
