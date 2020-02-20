import React from 'react';

const person = (props) => {
    return (
    <p>Im {props.name} and i am {Math.floor(Math.random()*99)} years old.</p>  
    );
}

export default person;