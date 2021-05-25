import { render } from '@testing-library/react';
import React from 'react';
import Main, { MainProps } from './Main';

describe('Main', () => {
    const defaultProps: MainProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Main {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Main')).toBeTruthy();
    });
});
