import authReducer from '../../reducers/auth';

describe('AuthReducer', () => {
    test('Should setup login', () => {
        const uid = '123abc';
        const action = {
            type: 'LOGIN',
            uid
        };
        const result = authReducer(undefined, action);
        expect(result).toEqual({ uid });
    });

    test('Should setup logout', () => {
        const action = { type: 'LOGOUT' };
        const result = authReducer(undefined, action);
        expect(result).toEqual({});
    });
});