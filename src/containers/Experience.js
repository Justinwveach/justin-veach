import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Experience " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Title</h1>
            </div>
        );
    }
}
