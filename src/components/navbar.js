import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar is-transparent">
            <div className="navbar-brand">
                <div className="navbar-item has-text-light"><Link className="has-text-light" to="/">TITLE PENDING</Link></div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-text-light"><p>Item 1</p></div>
                    <div className="navbar-item has-text-light"><p>Item 2</p></div>
                    <div className="navbar-item has-text-light"><p>Item 3</p></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;