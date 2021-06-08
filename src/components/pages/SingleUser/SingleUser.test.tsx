import { render } from '@testing-library/react';
import React from 'react';
import SingleUser, { SingleUserProps } from './SingleUser';

describe('SingleUser', () => {
    const defaultProps: SingleUserProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<SingleUser {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SingleUser')).toBeTruthy();
    });
});
