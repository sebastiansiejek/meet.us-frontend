import { render } from '@testing-library/react';
import React from 'react';
import MyAccount, { MyAccountProps } from './MyAccount';

describe('MyAccount', () => {
    const defaultProps: MyAccountProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<MyAccount {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MyAccount')).toBeTruthy();
    });
});
