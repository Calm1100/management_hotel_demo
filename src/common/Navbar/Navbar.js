import React from 'react';
import "../../App.css";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import  { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className="container flex_space">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/" onClick={closeMobileMenu}>
                            Home
                        </Link></li>
                    <li>
                        <Link to="/about" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/list-customer" onClick={closeMobileMenu}>
                            Destination
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/testimonail" onClick={closeMobileMenu}>
                            Testimonail
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/list-customer" onClick={closeMobileMenu}>
                            Customer
                        </Link>
                    </li>
                </ul>

                <div className="login-area flex">
                    <li>
                        <Link to='/sign-in'>
                            <i className="far far-chevron-right">Sign in</i>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to='/register'>
                            <i className="far far-chevron-right">Register</i>
                        </Link>
                    </li> */}
                    <li>
                        <Link to='/contact'>
                            <button className="primary-btn">Book Room</button>
                        </Link>
                    </li>
                </div>

            </div>
        </nav>

        <header>
            <div className="container flex_space">
                <div className="logo">
                    <img src="images/logo.png" alt="" />
                </div>
                
                <div className="contact flex_space">
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="text">
                            <h4>Working Hours</h4>
                            <Link to='/contact'>Monday-Sunday: 9.00am to 6.00pm</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="text">
                            <h4>Call Us</h4>
                            <Link to='/contact'>+0123 456 789</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h4>Mail Us</h4>
                            <Link to='/contact'>HelloReact@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar