import { render } from '@testing-library/react';
import React from 'react';
import CardLink, { CardLinkProps } from './CardLink';

describe('CardLink', () => {
    const defaultProps: CardLinkProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<CardLink {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('CardLink')).toBeTruthy();
    });
});
