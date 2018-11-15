import React from 'react';
import './User.css';
import {FaPencilAlt} from '../../node_modules/react-icons/fa';

const user = (props) => {
    return (
        <div className='user'>
            <p>Welcome <span>{props.firstName}</span>, you are our new user.<FaPencilAlt /></p>
        </div>
    )
};
export default user;