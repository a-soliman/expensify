import React from 'react';

export class LoginPage extends React.Component {
    login = () => {
        console.log('Loggin in...')

        // only if success
        
    };

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <button onClick={this.login} >Login</button>
            </div>
        );
    }
}