import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('Should setup edit expense action with default params', () => {
    const action = addExpense();
    const expense = action.expense;
    expect(action).toHaveProperty('type', 'ADD_EXPENSE');
    expect(expense).toHaveProperty('description', '');
    expect(expense).toHaveProperty('note', '');
    expect(expense).toHaveProperty('amount', 0);
    expect(expense).toHaveProperty('createdAt', 0);
});

test('Should setup edit expense action with passed data', () => {
    const expenseData = {
        description: 'Rent',
        amount: 2000,
        note: 'on 5th of the month',
        createdAt: 125
    };

    const action = addExpense({...expenseData});
    const expense = action.expense;

    expect(action).toHaveProperty('type', 'ADD_EXPENSE');
    expect(expense).toHaveProperty('description', expenseData.description);
    expect(expense).toHaveProperty('note', expenseData.note);
    expect(expense).toHaveProperty('amount', expenseData.amount);
    expect(expense).toHaveProperty('createdAt', expenseData.createdAt);
});