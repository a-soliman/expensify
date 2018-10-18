import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

describe('ExpenseDashboardComponent', () => {
    test('Should render ExpenseDashboard Component', () => {
        const wrapper = shallow(<ExpenseDashboardPage />);
        expect(wrapper).toMatchSnapshot();
    });
});