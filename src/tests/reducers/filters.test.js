import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('FiltersReducer', () => {
    
    test('Should setup default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate:  moment().endOf('month')
        });
    });

    test('Should set sortBy to amount', () => {
        const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
        expect(state.sortBy).toBe('amount');
    });

    test('Should set sortBy to date', () => {
        const currentStae = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const action = { type: 'SORT_BY_DATE' };
        const state = filtersReducer(currentStae, action);
        expect(state.sortBy).toBe('date');
    });

    test('Should set text filter', () => {
        const action = {
            type: 'SET_TEXT_FILTER',
            text: 'someText'
        };
        const state = filtersReducer(undefined, action);
        expect(state.text).toBe(action.text);
    });

    test('Should set startDate filter', () => {
        const action = {
            type: 'SET_START_DATE',
            date: 101
        };
        const state = filtersReducer(undefined, action);
        expect(state.startDate).toBe(action.date);
    });

    test('Should set endDate filter', ()=> {
        const action = {
            type: 'SET_END_DATE',
            date: 555
        };
        const state = filtersReducer(undefined, action);
        expect(state.endDate).toBe(action.date);
    });
});