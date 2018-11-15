import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>            {/*37*/}
            <input type='text' onChange={props.changed}/>

        </div>
    )
};

export  default person;