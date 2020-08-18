import React from 'react';
import styleHOC from './styleHOC';

const GoodButton = (props) => {
    return (
        <button {...props} style={props.style}>
            I'm a Good Button
        </button>
    );
};

export default styleHOC(GoodButton)


//Passing in a component to a function, that function is doing something with it and then spitting it back out. If you're using a HOC in one place, it's basically useless. You'll want to use it in multiple places. 

//We've basically wrapped the component in styleHOC. 

//Can do this with other components. Not just with style. Style is just an easy way to illustrate what the HOC is doing.

