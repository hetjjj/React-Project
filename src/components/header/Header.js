import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
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