import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {

      var classValue = "Footer " + this.props.isSticky;
      return (
            <div className={classValue}>
                Footer
            </div>
        );
    }
}

export default Footer;
