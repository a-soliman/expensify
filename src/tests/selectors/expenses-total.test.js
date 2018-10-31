import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('getExpensesTotal selector', () => {
    test('Should return 0 if no expenses', () => {
        const result = getExpensesTotal();
        expect(result).toBe(0);
    });

    test('Should correctly add up a single expense', () => {
        const result = getExpensesTotal([expenses[0]]);
        expect(result).toBe(expenses[0].amount);
    });
});