import React, { Component } from 'react';
import './ExperienceCard.css';

export default class ExperienceCard extends Component {

    render() {

        var projectsList = this.props.overview.projects.map(function(project, i) {
            return <li key={i}>{project}</li>;
        });

        var skillsList = this.props.overview.skills.map(function(skill, i) {
            return <li key={i}>{skill}</li>;
        });

        return (
            <div className="ExperienceCard rounded">
                <div className="ExperienceCard-leftSection">
                    <div className="ExperienceCard-title rounded">
                        {this.props.overview.title}
                    </div>

                    <div className="ExperienceCard-leftOverview">
                        <ul>
                            {skillsList}
                        </ul>
                    </div>
                </div>

                <div className="ExperienceCard-rightSection flex-container">
                    <div className="ExperienceCard-rightOverview">
                        <ul>
                            {projectsList}
                        </ul>
                    </div>

                    <div className="ExperienceCard-popout rounded flex-container">
                        {this.props.overview.description}
                    </div>
                </div>
                {/*
                <div className="ExperienceCard-title">
                    {this.props.title}
                </div>

                <div className="ExperienceCard-overview">
                    ;lasjdflkjsdflkjasdlkfjsaldkfjsadlkfj
                </div>

                <div className="ExperienceCard-content">
                    <div className="ExperienceCard-overviewTwo">
                        <span>
                            alksjdf ljaslkdfjaslkdjf lasdf alskdfj flkjsdflk asldkfj asldkf
                        </span>
                    </div>

                    <div className="ExperienceCard-popout">
                    </div>
                </div>
                */}
            </div>
        );
    }

}
