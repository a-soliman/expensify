import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('EditExpensePage Component', () => {
    const expense = expenses[2];
    let startEditExpense, startRemoveExpense, history, wrapper

    beforeEach(() => {
        startEditExpense = jest.fn();
        startRemoveExpense = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(
            <EditExpensePage 
                expense={expense} 
                startEditExpense={startEditExpense} 
                startRemoveExpense={startRemoveExpense} 
                history={history} />
        );
    });

    test('Should render EditExpensePage component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should handle onSubmit', () => {
        const updates = {
            ... expense,
            description: 'Updated Expense',
            note: 'updated expense'
        };
        wrapper.find('ExpenseForm').prop('onSubmit')(updates);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, updates);
    });

    test('Should handle onRemove', () => {
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
    });
});