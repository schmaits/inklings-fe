import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar is-transparent navbar-styling" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item has-text-light heading"><Link className="has-text-light" to="/">Inklings</Link></div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-text-light heading"><Link className="has-text-light" to="/clubs">Clubs</Link></div>
                    <div className="navbar-item has-text-light heading"><Link className="has-text-light" to="/">Books</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;