import { render } from '@testing-library/react';
import React from 'react';
import PartyAnimation, { PartyAnimationProps } from './PartyAnimation';

describe('PartyAnimation', () => {
    const defaultProps: PartyAnimationProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<PartyAnimation {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PartyAnimation')).toBeTruthy();
    });
});
