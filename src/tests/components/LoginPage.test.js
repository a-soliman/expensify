import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('LoginPage', () => {
    let login, wrapper;

    beforeEach(() => {
        login = jest.fn();
        wrapper = shallow(<LoginPage login={login}/>);
    });

    test('Should render loginPage component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});