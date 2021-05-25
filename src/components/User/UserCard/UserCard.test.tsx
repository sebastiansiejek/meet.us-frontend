import { render } from '@testing-library/react';
import React from 'react';
import UserCard, { UserCardProps } from './UserCard';

describe('UserCard', () => {
    const defaultProps: UserCardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<UserCard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UserCard')).toBeTruthy();
    });
});
