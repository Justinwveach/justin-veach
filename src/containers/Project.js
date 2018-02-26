import React, { Component } from 'react';
import './Project.css';

export default class Project extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var classValue = "Project " + this.props.rootClass + " " + this.props.isSticky;
        let direction = this.props.smallImageDirection;
        var smallImageClassNames = ""
        switch (direction) {
            case "left":
                smallImageClassNames = "Project-image-xs Project-imageLeft";
                break;
            case "right":
                smallImageClassNames = "Project-image-xs Project-imageRight";
                break;
            case "none":
                smallImageClassNames = "Project-image";
                break;
            default:

        }

        function getImage(name) {
            switch (name) {
                case 'aircentral':
                    return require('../images/aircentral-mockup.png');
                    break;
                case 'aegir':
                    return require('../images/aegir-mockup.png');
                    break;
                case 'portiontracker':
                    return require('../images/portiontracker-mockup.png');
                    break;
                case 'qscope':
                    return require('../images/qscope-mockup.png');
                    break;
                default:
                    return require('../images/iphone-blank.png');

            }
        }

        return (
            <section className={classValue}>
                <div className="Project-content">
                    <div className="Project-leftSection">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <p><a href={this.props.link} target="_blank">{this.props.linkTitle}&nbsp;</a></p>
                    </div>

                    <div className="Project-rightSection hidden-sm">
                        <img className="Project-image" src={getImage(this.props.projectImage)}/>
                    </div>

                    <div className="Project-smallImage visible-sm">
                        <img className={smallImageClassNames} src={getImage(this.props.projectImage)}/>
                    </div>
                </div>
            </section>
        );
    }
}
