import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('ExpeseForm Component', () => {

    test('Should render ExpenseForm correctly', () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render ExpenseForm with expense data', () => {
        const expense = expenses[0];
        const wrapper = shallow(<ExpenseForm expense={expense} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render error for invalid form submision', () => {
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(wrapper.state('error').length).toBeGreaterThan(0);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should set description on input change', () => {
        const value = 'new description';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at([0]).simulate('change', {target : { value }});
        expect(wrapper.state('description')).toBe(value);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should set amount on input change', () => {
        const value = '555.00';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at([1]).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('amount')).toBe(value);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should not set amount if invalid input', () => {
        const value = '12.123';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at([1]).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('amount')).toBe(0);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should set note on input change', () => {
        const value = 'new note';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('textarea').at([0]).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('note')).toBe(value);
        expect(wrapper).toMatchSnapshot();
    });
});
