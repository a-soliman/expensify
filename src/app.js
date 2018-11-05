import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 

import 'normalize-scss/sass/_normalize.scss';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import moment from 'moment';
import { firebase } from './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});


const jsx = (
    <Provider store={store} >
        <AppRouter/>
    </Provider> 
);

const appContainer = document.querySelector('#app');

ReactDOM.render(<p>Loading...</p>, appContainer);

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, appContainer);
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in!');
    }
    else {
        console.log('Logged out!');
    }
});
