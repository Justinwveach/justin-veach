import React, { Component } from 'react';
import Routes from './Routes';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { HideAt } from 'react-hide-show-utils';
import { ShowAt } from 'react-hide-show-utils';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import './App.css';
import windowSize from 'react-window-size';
import * as constants from './Constants';
import CardScroll from './containers/CardScroll'
//const landingCard = PageCard(Landing)

class App extends Component {


    render() {
        let containerCssClasses = 'App-content-container';

        console.log(this.props.windowWidth + '' + constants.MAX_MOBILE_WIDTH);
        if (this.props.windowWidth > constants.MAX_MOBILE_WIDTH) {

            //containerCssClasses += ' sidebar-content-offset';
        }

        var currentPath = window.location.pathname

        return (
            <div className="App">
                <div className="App-content">

                    <CardScroll/>

            {/*<Navbar />
            <div className={containerCssClasses}>
                <div className="App-content">
                    <div className="App-page-content">
                        <Routes />
                    </div>

                    {!currentPath.includes('Travel')
                    ? <Footer />
                    : null }
                </div>
            </div>
            */}
                </div>
            </div>
        );
    }
}

export default windowSize(App);
