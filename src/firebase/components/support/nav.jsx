import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
            <Link className='Link' to="/"><h1 className="logo Link">Shekay</h1></Link>
            <ul className="nav__list">
                <li className="nav__list-link">
                    <a href="" className="nav__list--anchor">About Us</a>
                </li>

              <Link to="/support">
              <li className="nav__list-link">
                    <a href="" className="nav__list--anchor">Support</a>
                </li></Link>

                <li className="nav__list-link">
                    <Link className='Link' to="/signup"><a href="" className="nav__list--anchor padding">Apply as a Job seeker</a></Link>
                </li>
                <li className="nav__list-link">
                    <Link  to="/employer" className="Link nav__list--anchor button"><a href="" className="nav__list--anchor">Hire a professional </a></Link>
                </li>
                <li className="nav__list-link">
                   <Link  to="/signin" className="Link nav__list--anchor"> <a href="" className="nav__list--anchor">Log in</a></Link>
                </li>
            </ul>
            </nav>

        </div>
    );
}

export default Nav;
