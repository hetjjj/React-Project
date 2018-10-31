import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.css';

class Header extends Component {
    render() {
        return (
            <div className={classes.header}>
                <div className={classes.nav} style={{ float: 'right' }}>
                    <NavLink to="/introduction">Introduction</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
                <h1><Link to="/">Welcome to my website!</Link></h1>
            </div>
        )
    }
}

export default Header;