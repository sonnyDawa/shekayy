import React from 'react';
import { Link } from 'react-router-dom';

const AccountNav = () => {
    return (
        <div>
            <nav className='nav'>
            <h1 className="logo account__logo">logo</h1>
            <ul className="nav__list">
                <li className="nav__list-link">
                    <a href="" className="nav__list--anchor account__nav">Home</a>
                </li>

                <li className="nav__list-link">
                    <a href="" className="nav__list--anchor account__nav">Find Jobs</a>
                </li>

                <li className="nav__list-link">
                    <a href="" className="nav__list--anchor account__nav">Hire</a>
                </li>
                <li className="nav__list-link">
                   <a href="" className="nav__list--anchor account__nav">Support</a>
                </li>
             
            </ul>
            <li className="nav__list-link">
               
                   <Link to="/profile" className="nav__list--anchor"> <img className='account__img' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2Fundraw_pic_profile_re_7g2h.svg?alt=media&token=e219e0b0-494b-47a4-8f25-c75a2804b712" alt="" /></Link>
                </li>
            </nav>

        </div>
    );
}

export default AccountNav;
