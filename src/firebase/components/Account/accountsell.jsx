import React from 'react';
import { Link } from 'react-router-dom';

const AccountSell = () => {
    return (
        <div className='getstarted--main'>
            <h1 className='getstarted__header--main'>Search for jobs</h1>
            <Link to="/jobs"><button className='getstarted__btn'>Get Started</button></Link>
            
        </div>
    );
}

export default AccountSell;