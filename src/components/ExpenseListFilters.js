import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} 
        />

        <select 
            value={props.filters.sortBy} 
            onChange={(e) => {
                const sortBy = e.target.value;
                props.dispatch(sortBy == 'date' ? sortByDate() : sortByAmount());
            }}
        >
            <option value="date" >Date</option>
            <option value="amount" >Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);