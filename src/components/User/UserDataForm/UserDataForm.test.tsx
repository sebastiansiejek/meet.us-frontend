import { render } from '@testing-library/react';
import React from 'react';
import UserDataForm, { UserDataFormProps } from './UserDataForm';

describe('UserDataForm', () => {
    const defaultProps: UserDataFormProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<UserDataForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UserDataForm')).toBeTruthy();
    });
});
