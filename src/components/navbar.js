import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item"><p>TITLE PENDING</p></div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item"><p>Your profile</p></div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item"><p>Item 1</p></div>
                    <div className="navbar-item"><p>Item 2</p></div>
                    <div className="navbar-item"><p>Item 3</p></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;