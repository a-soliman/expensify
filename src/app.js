import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 

import 'normalize-scss/sass/_normalize.scss';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import moment from 'moment';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const expenseOne = store.dispatch(addExpense({description: 'Water bill', amount: 125, createdAt: moment()}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: moment()}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: moment()}));

const jsx = (
    <Provider store={store} >
        <AppRouter/>
    </Provider> 
);

const appContainer = document.querySelector('#app');
ReactDOM.render(jsx, appContainer);