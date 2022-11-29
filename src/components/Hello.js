import React from "react";

//JSX
const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Kelvin</h1>
    //     </div>
    // )

// NON JSX
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello Kelvin'))
}

// JSX keeps the code simple, elegant, and readable 

export default Hello