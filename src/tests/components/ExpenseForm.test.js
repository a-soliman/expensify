import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';

describe('ExpeseForm Component', () => {
    test('Should render ExpenseForm', () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
