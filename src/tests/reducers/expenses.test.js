import expensesReducer from '../../reducers/expenses';
import { stat } from 'fs';

describe('ExpensesReducer', () => {
    const expenses = [
        {
            id: '1',
            description: 'expense 1', 
            note: '', 
            amount: 0, 
            createdAt: 0
        },
        {
            id: '2',
            description: 'expense 2', 
            note: '', 
            amount: 0, 
            createdAt: 0
        },
        {
            id: '3',
            description: 'expense 3', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    ];

    test('Should set the default state', () => {
        const state = expensesReducer(undefined, { type: '@@INIT'} );
        expect(state).toEqual([]);
    });

    test('Should add expense', () => {
        const action = {
            type: 'ADD_EXPENSE',
            expense: {
                title: 'test'
            }
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([
            ...expenses,
            { ...action.expense }
        ]);
    });

    test('Should remove expense', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: '1'
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[1], expenses[2]]);
    });

    test('Should edit expense', () => {
        const newData = {
            id: '2',
            description: 'updated description',
            note: 'updated note'
        };
        const action = {
            type: 'EDIT_EXPENSE',
            id: newData.id,
            updates: { ...newData }
        };
        const state = expensesReducer(expenses, action);
        expect(state[1].description).toBe(newData.description);
        expect(state[1].note).toBe(newData.note);
    });

    test('Should set expenses', () => {
        const action = {
            type: 'SET_EXPENSES',
            expenses: [expenses[1]]
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[1]]);
    });

});