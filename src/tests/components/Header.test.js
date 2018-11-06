import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header Component', () => {
    let startLogout, wrapper;

    beforeEach(() => {
        startLogout = jest.fn();
        wrapper = shallow(<Header startLogout={startLogout} />);
    });

    test('Should render header correctlly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call start logout on click', () => {
        wrapper.find('button').simulate('click');
        expect(startLogout).toHaveBeenCalled();
    });
});