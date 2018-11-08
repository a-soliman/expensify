import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummery = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal /100).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viwing <span>{expenseCount}</span> {expenseWord}, with a taotal of <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__action">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
    return  {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
    
};

export default connect(mapStateToProps)(ExpensesSummery);