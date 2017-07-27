import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      getInitialState(){
          return {'showHideMenu': 'Navbar-mobile'};
        }

      toggleMenu() {
          this.setState(prevState => ({
              isToggleOn: !prevState.isToggleOn
          }));

          if (this.state.isToggleOn) {
              this.setState({'showHideMenu': 'Navbar-open'});
          } else {
              this.setState({'showHideMenu': 'Navbar-mobile'});
          }

          console.log(this.state.showHideMenu);
      }

   render() {
        let classNamesToUse = "Navbar";
        let isMobile = false;
        if (this.props.windowWidth < 992) {
            classNamesToUse += " Navbar-mobile";
            isMobile = true;
        } else {
            classNamesToUse += " Navbar-desktop";
        }

        let currentPath = window.location.pathname
        if (currentPath.includes('Travel')) {
            classNamesToUse += ' Navbar-sticky-header';
        }

        return (
            <div className={classNamesToUse}>
                {isMobile ? (
                    <div className="Navbar-mobile-top-bar">
                    <div className="Navbar-icon" />
                    <button className="Navbar-hamburger" onClick={this.toggleMenu}>Togs</button>
                    </div>) : null}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Travel">Travel</Link></li>
                    <li><Link to="/Trading">Trading</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Holler">Holler</Link></li>
                </ul>
            </div>
        );
    }
}

export default windowSize(Navbar);
