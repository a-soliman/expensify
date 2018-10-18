import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header Component', () => {
    test('Should render header correctlly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});