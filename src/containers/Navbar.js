import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';
import './Navbar.css';

class Navbar extends Component {
    render() {
        let classNamesToUse = "Navbar";

        if (this.props.windowWidth < 992) {
            classNamesToUse += " Navbar-mobile";
        } else {
            classNamesToUse += " Navbar-desktop";
        }
        return (
            <div className={classNamesToUse}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Travel">{this.props.windowWidth}</Link></li>
                </ul>
            </div>
        );
    }
}

export default windowSize(Navbar);
