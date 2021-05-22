import { render } from '@testing-library/react';
import React from 'react';
import Logo, { LogoProps } from './Logo';

describe('Logo', () => {
    const defaultProps: LogoProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Logo {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Logo')).toBeTruthy();
    });
});
