import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0,
        createdAt: moment(),
        calenderFocused: false,
        error: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    
    onDateChange = (createdAt) => {
        if ( createdAt ) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if ( !this.state.description || !this.state.amount ) {
            const error = 'Please provide description and amount!'
            this.setState(() => ({ error }))
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder="Amount"
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder= "Add a note for your expense (Optional)"
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
                <div className="messages">
                    { this.state.error && <div className="error">{this.state.error}</div>}
                </div>
            </div>
        );
    }
}
