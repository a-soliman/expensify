import expensesReducer from '../../reducers/expenses';

describe('ExpensesReducer', () => {
    
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
        const state = expensesReducer(undefined, action);
        expect(state).toEqual([
            { ...action.expense }
        ]);
    });

    

});