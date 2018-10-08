import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/* ACTIONS */
// + EXPENSE
// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount= 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
};
// EDIT_EXPENSE
const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// + FILTER
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if ( expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })

        default:
            return state;
    }
};
const filtersReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

// FILTERS REDUCER
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
);


store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Education', amount: 50}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

const demoState = {
    expenses: [{
        id: 'aaajjjaaa',
        descriptions: 'January Rent',
        notes: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],

    filters : {
        text: 'rent',
        sortBy: 'amont', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};