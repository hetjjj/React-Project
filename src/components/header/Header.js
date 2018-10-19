import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div style={{ float: 'right' }}>
                    <Link to="">Home</Link>
                    <Link to="introduction">Introduction</Link>
                </div>
                <h1>Welcome to my website!</h1>
            </div>
        )
    }
}

export default Header;