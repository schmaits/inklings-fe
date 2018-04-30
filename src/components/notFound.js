import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const NotFound = () => {
    return (
        <div>
            <p className="has-text-centered has-text-light title">That page doesn't exist</p>
            <p className="has-text-centered"><Link to="/" className="has-text-light title">Would you like to go back home?</Link></p>
            <p className="not-found">404</p>
        </div>
    )
}

export default NotFound;
