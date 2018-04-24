import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar is-transparent">
            <div className="navbar-brand">
                <div className="navbar-item has-text-light"><p>TITLE PENDING</p></div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item has-text-light"><p>Your profile</p></div>
                </div>
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