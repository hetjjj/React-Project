import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div style={{ float: 'right' }}>
                    <Link to="" activeClassName={classes.active}>Home</Link>
                    <Link to="introduction">Introduction</Link>
                </div>
                <h1>Welcome to my website!</h1>
            </div>
        )
    }
}

export default Header;