import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

describe('ExpenseListFilters Component', () => {
    let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

    beforeEach(() => {
        setTextFilter = jest.fn();
        sortByDate = jest.fn();
        sortByAmount = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();
        wrapper = shallow(
            <ExpenseListFilters 
                filters = {filters}
                setTextFilter = {setTextFilter}
                sortByDate = {sortByDate}
                sortByAmount = {sortByAmount}
                setStartDate = {setStartDate}
                setEndDate = {setEndDate}
            />
        );
    });

    test('Should render ExpenseListFilters component corectly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});