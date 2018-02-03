import React, { Component } from 'react';
import './About.css';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "About " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Title</h1>
            </div>
        );
    }
}
