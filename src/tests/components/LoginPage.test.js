import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('LoginPage', () => {
    let startLogin, wrapper;

    beforeEach(() => {
        startLogin = jest.fn();
        wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    });

    test('Should render loginPage component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});