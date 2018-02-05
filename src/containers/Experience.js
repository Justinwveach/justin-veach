import React, { Component } from 'react';
import './Experience.css';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceOverview from '../model/ExperienceOverview';

export default class Experience extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Experience PageCard-content " + this.props.isSticky;
        var mobileOverview = new ExperienceOverview("Mobile - iOS | Android", "");

        mobileOverview.addProjects(["Aegir Maps - Indoor Mapping", "Whirly Dirly Words", "Portion Tracker"]);
        mobileOverview.addSkills(["Swift", "Objective-C", "Xcode", "Cocoa Pods", "Java", "Android Studio"]);

        return (
            <div className={classValue}>
                <h1>Experience</h1>

                <ExperienceCard overview={mobileOverview}/>
            </div>
        );
    }
}
