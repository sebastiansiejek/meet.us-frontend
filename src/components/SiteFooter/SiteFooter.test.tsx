import { render } from '@testing-library/react';
import React from 'react';
import SiteFooter, { SiteFooterProps } from './SiteFooter';

describe('SiteFooter', () => {
    const defaultProps: SiteFooterProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<SiteFooter {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SiteFooter')).toBeTruthy();
    });
});
