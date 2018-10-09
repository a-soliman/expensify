/*
    IMPORTANT NOTES:
    ---------------
Higher Order Component (HOC) - A component (HOC) that renders another component.

    ADVANTEGES:
    ----------
- Reuse code.
- Render hijacking.
- Prop manipulation.
- Abstract state.

*/


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please Sign in to view the info..</p>}
            {props.isAuthenticated &&
                <WrappedComponent {...props} />
            }
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the info" />, document.querySelector('#app'));

// const withPrivateMessage = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>These are private information. Please DO NOT share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// const AdminInfo = withPrivateMessage(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the information!" />, document.querySelector('#app'));