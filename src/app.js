import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 

import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Water bill', amount: 125, createdAt: 200}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 201}));

store.dispatch(setTextFilter('gas'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);

const jsx = (
    <Provider store={store} >
        <AppRouter/>
    </Provider> 
);

const appContainer = document.querySelector('#app');
ReactDOM.render(jsx, appContainer);