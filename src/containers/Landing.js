import React, { Component } from 'react';
import './Landing.css';

export default class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Landing " + this.props.isSticky;

        return (

            <div className={classValue}>
                <h1>Title</h1>
            </div>
        );
    }
}
