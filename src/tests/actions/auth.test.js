import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

describe('Auth Actions', () => {
    test('Should login', () => {
        const uid = '123abc';
        const action = login(uid);
        expect(action).toEqual({
            type: 'LOGIN',
            uid
        });
    });

    test('Should logout', () => {
        const action = logout();
        expect(action).toEqual({ type: 'LOGOUT' });
    });
});
