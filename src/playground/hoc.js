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

const withPrivateMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>These are private information. Please DO NOT share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withPrivateMessage(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="There are the information!" />, document.querySelector('#app'));