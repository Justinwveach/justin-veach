import React, { Component } from 'react';
import './Contact.css';
import TextField from '../components/TextField';

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let title = "Get In Touch";
        let subTitle;
        let classNames = "Contact page-section";
             if (window.location.pathname.includes("Contact")) {
                 classNames = classNames + " standalone Contact-colored";
                 title = "Contact Us";
                 subTitle = (<p className="subtitle">Contact us to get a free quote or schedule an appointment.</p>)
             } else {
                 classNames = classNames + " Contact-light";
             }

        var classValue = "Contact PageCard-content " + this.props.isSticky;

        return (
            <div className={classValue}>
                <h1>Get In Touch</h1>
                <div className="Contact-content">
                     <form action="https://wdutayif35.execute-api.us-east-1.amazonaws.com/prod/sendMail">
                     <div className="row">
                        <div className="col col-sm-12 col-md-12">
                            <TextField fieldName="Name" refName="txtFirstName" inputType="textfield" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-12 col-md-12">
                            <TextField fieldName="Email" refName="txtEmail" inputType='textfield' textType="email" pattern="[^ @]*@[^ @]*" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-12">
                            <TextField fieldName="Comments" refName="txtComments" inputType='textarea'/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-sm-12">
                            <input className="Contact-button" type="submit"/>
                        </div>
                    </div>

                    </form>
                </div>
            </div>
        );
    }
}
