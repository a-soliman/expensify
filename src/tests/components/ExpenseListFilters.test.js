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

    test('Should render ExpenseListFilters component with alt-data corectly', () => {
        wrapper.setProps({
            filters: altFilters
        });

        expect(wrapper).toMatchSnapshot();
    });

    test('Should handle text change', () => {
        const value = 'Rent';
        wrapper.find('input').simulate('change', {
            target: { value }
        });
        expect(setTextFilter).toHaveBeenLastCalledWith(value);
    });

    test('Should sorytByDate', () => {
        const value = 'date';
        wrapper.setProps({
            filters: altFilters
        });
        wrapper.find('select').simulate('change', {
            target: { value }
        });

        expect(sortByDate).toHaveBeenCalled();
    });

    test('Should sort by amount', () => {

    });

    test('Should handle date change', () => {

    });

    test('Should handle date focus change', () => {

    });
});