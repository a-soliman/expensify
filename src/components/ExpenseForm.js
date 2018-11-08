import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }
    
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
            <form onSubmit={this.onSubmit} className="form">
                { this.state.error && <div className="form__error">{this.state.error}</div>}
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus
                />
                <input 
                    className="text-input"
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
                    className="text-area"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder= "Add a note for your expense (Optional)"
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        );
    }
}
