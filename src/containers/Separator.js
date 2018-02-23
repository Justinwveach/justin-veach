import React, { Component } from 'react';
import './Separator.css';

export default class Separator extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Separator " + this.props.rootClass + " " + this.props.isSticky;

        return (

            <div className={classValue}>
                <div className="Separator-container">
                    <div className="Separator-textContainer">
                        <h1 className="Separator-title">{this.props.title}</h1>
                        <h3 className="Separator-subtitle">{this.props.subtitle}</h3>
                    </div>
                </div>
            </div>
        );
    }
}
