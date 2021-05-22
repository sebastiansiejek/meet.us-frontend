import { render } from '@testing-library/react';
import React from 'react';
import EventCards, { EventCardsProps } from './EventCards';

describe('EventCards', () => {
    const defaultProps: EventCardsProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<EventCards {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('EventCards')).toBeTruthy();
    });
});
