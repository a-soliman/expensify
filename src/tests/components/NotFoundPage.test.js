import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

describe('NotFoundPage Component', () => {
    test('Should render NotFoundPage Component', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
});