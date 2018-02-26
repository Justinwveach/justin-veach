import React, { Component } from 'react';
import './RepeatModule.css';

class RepeatModule extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var listItems = this.props.items.map(function(item, i) {
            return (
                <li key={i}>
                    {item}
                </li>
            );
        });

        var classNames = "RepeatModule";

        if (this.props.hideBullets === true) {
            classNames += " RepeatModule-noBullets";
        }

        if (this.props.collapseOnSmall === true) {
            classNames += " RepeatModule--collapsed";
        }

        return (
            <ul className={classNames}>
                {listItems}
            </ul>
        );
    }
}

export default RepeatModule;
