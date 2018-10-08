import { createStore, combineReducers } from 'redux';

/* ACTIONS */
// + EXPENSE
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE


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
        default:
            return state;
    }
};
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
);

console.log(store.getState());


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