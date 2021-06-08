import { render } from '@testing-library/react';
import React from 'react';
import EventForm, { EventFormProps } from './EventForm';

describe('EventForm', () => {
    const defaultProps: EventFormProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<EventForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('EventForm')).toBeTruthy();
    });
});
