import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-4'>
            <h1>404 Error Page</h1>
            <p>Sorry, This page doesn't exist</p>
            <img src="/src/assets/images/360_F_229463039_B4KwKD6ifdRV8G5S0sqrzBrAfHNzpReq.jpg" alt="" />
            <NavLink className="d-block text-dark fw-bold mb-4" to="/">GO Back</NavLink>
        </div>
    );
};

export default Error;