import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

describe('SetTextFilter' , () => {
    test('Should return default text value if no value provided', () => {
        const action = setTextFilter();
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        });
    });

    test('Should return the provided value for text', ()=> {
        const textTest = 'some text';
        const action = setTextFilter(textTest);
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: textTest
        });
    });
});

describe('SortByDate', () => {
    test('Should return the correct type', () => {
        const action = sortByDate();
        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        });
    });
});

describe('SortByAmount', () => {
    test('Should return the correct type', () => {
        const action = sortByAmount();
        expect(action).toEqual({
            type: 'SORT_BY_AMOUNT'
        });
    });
});

