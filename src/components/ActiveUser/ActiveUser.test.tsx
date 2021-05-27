import { render } from '@testing-library/react';
import React from 'react';
import ActiveUser, { ActiveUserProps } from './ActiveUser';

describe('ActiveUser', () => {
    const defaultProps: ActiveUserProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ActiveUser {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ActiveUser')).toBeTruthy();
    });
});
