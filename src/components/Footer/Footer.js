import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const menuLinks = [{name:"Home",link:"/"},{name:"Launch",link:"/launch"},{name:"Men",link:"/men"},{name:"Women",link:"/women"},{name:"About Us",link:"/about"},]

const Footer = () => {
    return (
        <div className='footer-container'>
            <nav className='top-menu'>
                <div className='logo-div'>
                    <img src='https://www.creativehire.com.au/wp-content/uploads/2016/08/nike-logo-gray-1-1024x640.png' alt='logo' className='logo' />
                </div>
                <div className='menu-div'>
                    {menuLinks.map((link) => (
                        <Link key={link.name} to={link.link} className='footer-link'>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Footer;