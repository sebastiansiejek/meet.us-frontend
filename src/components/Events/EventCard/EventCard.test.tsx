import { render } from '@testing-library/react';
import React from 'react';
import EventCard, { EventCardProps } from './EventCard';

describe('EventCard', () => {
  const defaultProps: EventCardProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<EventCard {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('EventCard')).toBeTruthy();
  });
});
