import { render } from '@testing-library/react';
import React from 'react';
import SwitchTemplate, { SwitchTemplateProps } from './SwitchTemplate';

describe('SwitchTemplate', () => {
    const defaultProps: SwitchTemplateProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<SwitchTemplate {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SwitchTemplate')).toBeTruthy();
    });
});
