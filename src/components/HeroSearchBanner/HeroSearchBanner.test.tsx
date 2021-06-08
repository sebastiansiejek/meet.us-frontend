import { render } from '@testing-library/react';
import React from 'react';
import HeroSearchBanner, { HeroSearchBannerProps } from './HeroSearchBanner';

describe('HeroSearchBanner', () => {
    const defaultProps: HeroSearchBannerProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HeroSearchBanner {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HeroSearchBanner')).toBeTruthy();
    });
});
