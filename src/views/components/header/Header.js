import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.css';
import { isClient } from '../../../routing/routingHelper';

class Header extends Component {

    componentDidMount() {
        if (isClient()) {
            document.addEventListener('scroll', this.handleNavBar);
        }
    }

    handleNavBar() {
        let ele = document.getElementsByClassName('header')[0];
        if (window.pageYOffset >= 350) {
            ele.style.background = "black";
        } else {
            ele.style.background = "";
        }
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <nav className={classes.nav} style={{ float: 'right' }}>
                        <NavLink to="/introduction">Introduction</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </nav>
                    <h1 style={{
                        display: "inline",
                        "fontWeight": "500",
                        "marginLeft": "15px"
                    }}><Link to="/">Tangjie He</Link></h1>
                </div>
            </div>
        )
    }
}

export default Header;