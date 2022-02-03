import { render } from '@testing-library/react';
import React from 'react';
import EventCardSkeleton, { EventCardSkeletonProps } from './EventCardSkeleton';

describe('EventCardSkeleton', () => {
  const defaultProps: EventCardSkeletonProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(
      <EventCardSkeleton {...props} />,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('EventCardSkeleton')).toBeTruthy();
  });
});
