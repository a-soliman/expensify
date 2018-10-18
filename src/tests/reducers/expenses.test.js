import expensesReducer from '../../reducers/expenses';

describe('ExpensesReducer', () => {
    
    test('Should set the default state', () => {
        const state = expensesReducer(undefined, { type: '@@INIT'} );
        expect(state).toEqual([]);
    });

});