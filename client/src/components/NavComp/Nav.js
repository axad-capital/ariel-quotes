import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BlackLogo from './blacklogo.png';
import './nav.css';

const Nav = () => {

    const location = useLocation()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='logo' src={BlackLogo} alt='logo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a href='/life-insurance'className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Life Insurance</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/life-insurance' className="dropdown-item">Overview</Link></li>
                                    <li><Link to='/life-insurance/term-view' className="dropdown-item">Term View</Link></li>
                                    <li><Link to='/life-insurance/final-expense' className="dropdown-item">Final Expense</Link></li>
                                    <li><Link to='/life-insurance-quote' className="dropdown-item" id='get-quote-bg'>Get Quotes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href='/medicare'className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Medicare</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/medicare' className="dropdown-item">Overview</Link></li>
                                    <li><Link to='/medicare/medicare-supplement' className="dropdown-item">Medicare Supplement</Link></li>
                                    <li><Link to='/medicare/medicare-advantage' className="dropdown-item">Medicare Advantage</Link></li>
                                    <li><Link to='/medicare-quote' className="dropdown-item" id='get-quote-bg'>Get Quotes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact-us' className={location.pathname === '/contact-us' ? 'nav-link active' : 'nav-link'}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav