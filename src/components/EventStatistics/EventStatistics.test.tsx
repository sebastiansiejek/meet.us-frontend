import { render } from '@testing-library/react';
import React from 'react';
import EventStatistics, { EventStatisticsProps } from './EventStatistics';

describe('EventStatistics', () => {
  const defaultProps: EventStatisticsProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<EventStatistics {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('EventStatistics')).toBeTruthy();
  });
});
