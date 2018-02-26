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
                <h1>Résumé Overview</h1>

                <div className="row">
                    <div className="col col-12">
                        <h4>Lokion Interactive</h4>
                        <p>Worked collaboratively to create an indoor  mapping product that provided wayfinding and directions for the interiors of buildings.</p>

                        {/*<p>Performed contract work for clients including ServiceMaster, Methodist, and Scotts that required leveraging existing skill sets (iOS, Swift, HTML, CSS, JavaScript)  and learning new ones (Oracle ATG, Drupal, Meteor).</p>*/}

                        <h4>International Paper</h4>
                        <p>Created iOS applications, RESTful web services, and C# .NET applications that streamlined business processes and cut costs.</p>
                        {/*<p>Used a wide variety of Microsoft technologies to implement business-focused applications that improved processes and cut costs. Primarily developed C# .NET applications and SharePoint custom features. In addition to development, I assisted with various support tasks such as server upgrades and site migrations.</p>*/}
                        {/*<p>Organized team building, networking, and social events as the CORE Network Event Lead. The CORE Network  is a program that consists of recent college grads (within 5 years), and was designed to promote engagement and networking. As the Event Lead, I was responsible for managing a $20,000 budget for approximately 15 events throughout the year.</p>*/}
                        <p>As the CORE Network Event Lead, I managed a $20,000 budget for approx. 15 team buiding, networking, and social events throughout the year.</p>

                    </div>
                </div>

                <p>Want more? Just contact <a href="mailto:justinwveach@gmail.com?Subject=Full%20Resume%20Request" target="_top">me</a> for a complete résumé.</p>
            </div>
        );
    }
}
