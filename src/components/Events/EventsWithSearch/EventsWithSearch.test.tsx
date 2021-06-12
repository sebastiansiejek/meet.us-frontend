import { render } from '@testing-library/react';
import React from 'react';
import EventsWithSearch, { EventsWithSearchProps } from './EventsWithSearch';

describe('EventsWithSearch', () => {
    const defaultProps: EventsWithSearchProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<EventsWithSearch {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('EventsWithSearch')).toBeTruthy();
    });
});
