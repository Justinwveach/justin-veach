import React, { Component } from 'react';
import './StyleGuide.css';
import Button from '../components/Button'

class StyleGuide extends Component {

    render() {
        return (
            <div className="StyleGuide">
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
                <Button title="Hello" />
            </div>
        );
    }
}

export default StyleGuide;
