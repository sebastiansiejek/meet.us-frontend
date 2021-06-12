import { render } from '@testing-library/react';
import React from 'react';
import EventModal, { EventModalProps } from './EventModal';

describe('EventModal', () => {
    const defaultProps: EventModalProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<EventModal {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('EventModal')).toBeTruthy();
    });
});
