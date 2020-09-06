import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="mt-20">
            <Link className="nav_manu" to="/posts">Home</Link>
        </div>
    );
};

export default Header;