import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummery } from '../../components/ExpensesSummery';

describe('ExpensesSummery Component', () => {

    test('Should render ExpensesSummery correctly', () => {
        const wrapper = shallow(<ExpensesSummery  expensesCount={3} expensesTotal={256}  />);
        expect(wrapper).toMatchSnapshot();
    });
});