import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/images/crown.svg'
function header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>

            </div>
        </div>
    )
}

export default header
