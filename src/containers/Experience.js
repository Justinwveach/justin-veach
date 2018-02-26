import React, { Component } from 'react';
import './Experience.css';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceOverview from '../model/ExperienceOverview';
import RepeatModule from '../components/RepeatModule';

export default class Experience extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Experience " + this.props.rootClass + " " + this.props.isSticky;
        /*
        var mobileOverview = new ExperienceOverview("Mobile - iOS | Android", "");
        mobileOverview.addProjects(["Aegir Maps - Indoor Mapping", "Whirly Dirly Words", "Portion Tracker"]);
        mobileOverview.addSkills(["Swift", "Objective-C", "Xcode", "Cocoa Pods", "Java", "Android Studio"]);
        */

        const languages = ["Swift", "Objective-C", "Java", "JavaScript", "HTML5", "CSS", "C#"];
        const ides = ["Xcode", "Android Studio", "Atom", "Visual Studio"];
        const tools = ["SVN", "Github", "Trello", "Jira", "AWS", "React", "CocoaPods"];
        return (
            <div className={classValue}>
                <h1>How I Get Work Done</h1>

                {/*<ExperienceCard overview={mobileOverview}/>*/}
                <div className="row">
                    <div className="col col-12 col-md-4">
                        <h4>Languages</h4>
                        <RepeatModule items={languages} hideBullets={true} collapseOnSmall={true}/>
                    </div>

                    <div className="col col-12 col-md-4">
                        <h4>IDEs</h4>
                        <RepeatModule items={ides} hideBullets={true} collapseOnSmall={true}/>
                    </div>

                    <div className="col col-12 col-md-4">
                        <h4>Other</h4>
                        <RepeatModule items={tools} hideBullets={true} collapseOnSmall={true}/>
                    </div>
                </div>
            </div>
        );
    }
}
