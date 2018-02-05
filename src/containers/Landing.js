import React, { Component } from 'react';
import './Landing.css';

export default class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Landing PageCard-content " + this.props.isSticky;

        return (

            <div className={classValue}>
                <div className="Landing-container">
                    <div className="Landing-textContainer">
                        <h1 className="Landing-title">Justin Veach</h1>
                        <h3 className="Landing-subtitle">Software Developer. Culinary Comforter. Human.</h3>
                    </div>
                </div>

                <div className="Landing-scrollIndicator">Scroll Up</div>
            </div>
        );
    }
}
