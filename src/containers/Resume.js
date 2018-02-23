import React, { Component } from 'react';
import './Resume.css';

export default class Resume extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Resume " + this.props.rootClass + " " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Resume</h1>
            </div>
        );
    }
}
