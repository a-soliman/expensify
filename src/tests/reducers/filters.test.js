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

    
});