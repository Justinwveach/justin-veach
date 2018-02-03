import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Contact " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Title</h1>
            </div>
        );
    }
}
