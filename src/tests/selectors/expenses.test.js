import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

describe('getVisibleExpenses', () => {
    const expenses = [
        {
            id: '1',
            description: 'Gum',
            amount: 105,
            createdAt: moment(1).valueOf()
        },
        {
            id: '2',
            description: 'Rent',
            amount: 109500,
            createdAt: moment(0).subtract(4, 'days').valueOf()
        },
        {
            id: '3',
            description: 'Credit Card',
            amount: 4500,
            createdAt: moment(0).add(4, 'days').valueOf()
        }
    ];

    test('Should filter by text value', () => {
        const filters = {
            text: 'e',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        };
        const result = getVisibleExpenses(expenses, filters);
        expect(result).toHaveLength(2);
        expect(result).toEqual([expenses[2], expenses[1]]);
    });

    test('Should filter by startDate', () => {
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: moment(0),
            endDate: undefined
        };
        const result = getVisibleExpenses(expenses, filters);
        expect(result).toHaveLength(2);
        expect(result).toEqual([expenses[2], expenses[0]]);
    });

    test('Should filter by endDate', () => {
        const filters = {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: moment(0).add(3, 'days')
        };
        const result = getVisibleExpenses(expenses, filters);
        expect(result).toHaveLength(2);
        expect(result).toEqual([expenses[0], expenses[1]]);
    });

    test('Should sort by date', () => {
        const filters = {
            test: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        };
        const result = getVisibleExpenses(expenses, filters);
        expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
    });

    test('Should sory by amount', () => {
        const filters = {
            test: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const result = getVisibleExpenses(expenses, filters);
        expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
    });
});