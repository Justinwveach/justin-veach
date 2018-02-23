import React, { Component } from 'react';
import './About.css';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "About " + this.props.rootClass + " " + this.props.isSticky;

        return (
            <div className={classValue}>
                <div className="About-background"></div>
                <div className="About-overlay"></div>
                <div className="About-content">
                    <h1>To Be More Specific</h1>

                    <p>Professionaly, my primary focus is mobile development with my strongest being iOS, followed by Android.
                    However, I&rsquo;m not afraid to tackle some web development (front or back) when the need arises.
                    Keep scrolling to get more details about various projects I&rsquo;ve worked on.</p>

                    <p>Personally, I enjoy hosting family and friends for dinner.
                    Nothing beats fresh pasta from scratch - which is my usual go-to.
                    Outside of the home, I enjoy various outdoor activities such as hiking and camping.</p>
                </div>
            </div>
        );
    }
}
