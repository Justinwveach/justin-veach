import React, { Component } from 'react';
import './Work.css';

export default class Work extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Work " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Title</h1>
            </div>
        );
    }
}
