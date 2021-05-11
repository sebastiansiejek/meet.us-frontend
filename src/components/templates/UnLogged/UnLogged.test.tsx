import { render } from '@testing-library/react';
import React from 'react';
import UnLogged, { UnLoggedProps } from './UnLogged';

describe('UnLogged', () => {
    const defaultProps: UnLoggedProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<UnLogged {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UnLogged')).toBeTruthy();
    });
});
